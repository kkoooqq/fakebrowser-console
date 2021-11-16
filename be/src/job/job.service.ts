import * as path from 'path'
import * as fs from 'fs-extra'

import {Inject, Injectable} from '@nestjs/common'
import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm'
import {DEVICE_DESC_REPOSITORY, JOB_REPOSITORY} from '../constants'
import {Job} from './job.entity'
import {DeviceDesc} from '../devicedesc/devicedesc.entity'

@Injectable()
export class JobService {
    constructor(
        @Inject(JOB_REPOSITORY)
        private readonly jobRepository: Repository<Job>,
        @Inject(DEVICE_DESC_REPOSITORY)
        private readonly deviceDescRepository: Repository<DeviceDesc>,
    ) {
    }

    async create(dd: Job): Promise<Job> {
        const insertResult: InsertResult = await this.jobRepository.insert(dd)
        return insertResult.generatedMaps[0] as Job
    }

    async update(dd: Job): Promise<UpdateResult> {
        return await this.jobRepository.update(dd.id, dd)
    }

    async getAll(): Promise<Job[]> {
        return await this.jobRepository.find()
    }

    async get(id: number): Promise<Job> {
        return await this.jobRepository.findOne(id)
    }

    async getPage(page: number, per_page: number): Promise<[Job[], number]> {
        return await this.jobRepository.findAndCount({
            skip: page * per_page,
            take: per_page,
        })
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.jobRepository.delete(id)
    }

    async play(id: number) {
        // get job data
        const job = await this.get(id)

        const userDataDir = path.resolve(__dirname, `../../job-cache/fakeBrowserJobData-${id}`)
        fs.mkdirSync(userDataDir, {recursive: true})

        const ddFileName = path.resolve(userDataDir, './__fb_dd.json')

        if (!fs.existsSync(ddFileName)) {
            // get platform data
            const platformData = await this.deviceDescRepository.createQueryBuilder()
                .orderBy('RAND()')
                .getOne()

            if (platformData) {
                fs.writeFileSync(ddFileName, platformData.deviceDesc)
            }
        }

        const script = `
const {FakeBrowser} = require('fakebrowser');

!(async () => {
    const windowsDD = require('./__fb_dd.json');
    const builder = new FakeBrowser.Builder()
        .deviceDescriptor(windowsDD)
        .displayUserActionLayer(${job.displayUserActionLayer})
        .vanillaLaunchOptions({
            headless: ${job.headless},
            ${job.browserPath ? 'executablePath: \'' + job.browserPath + '\',' : ''} 
        })
        .userDataDir('${userDataDir}');

    const fakeBrowser = await builder.launch();

    ${job.script}

    if (${job.shutdownWhenDone}) {
        await fakeBrowser.shutdown();
    }
})();
        `

        const scriptFile = path.resolve(userDataDir, './__fb_script.js')
        fs.writeFileSync(scriptFile, script)

        const {spawn, execSync, exec} = require('child_process')
        const cmd = 'node ' + scriptFile

        console.log(cmd)

        exec(cmd)
    }
}
