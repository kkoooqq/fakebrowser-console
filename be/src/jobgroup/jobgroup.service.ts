import {Inject, Injectable} from '@nestjs/common'
import {JOB_GROUP_REPOSITORY, JOB_REPOSITORY} from '../constants'
import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm'
import {JobGroup} from './jobgroup.entity'
import {Job} from '../job/job.entity'

@Injectable()
export class JobGroupService {
    constructor(
        @Inject(JOB_GROUP_REPOSITORY)
        private readonly jobGroupRepository: Repository<JobGroup>,
        @Inject(JOB_REPOSITORY)
        private readonly jobRepository: Repository<Job>,
    ) {
    }

    async create(dd: JobGroup): Promise<JobGroup> {
        const insertResult: InsertResult = await this.jobGroupRepository.insert(dd)
        return insertResult.generatedMaps[0] as JobGroup
    }

    async update(dd: JobGroup): Promise<UpdateResult> {
        return await this.jobGroupRepository.update(dd.id, dd)
    }

    async getAll(): Promise<JobGroup[]> {
        return await this.jobGroupRepository.find()
    }

    async get(id: number): Promise<JobGroup> {
        return await this.jobGroupRepository.findOne(id)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.jobGroupRepository.delete(id)
    }

    async activeJobGroup(id: number): Promise<boolean> {
        let sql = `update job_group set activated=0`
        await this.jobGroupRepository.query(sql)

        sql = `update job_group set activated=1 where id=${id}`
        await this.jobGroupRepository.query(sql)

        return true
    }

    async getJobs(id: number): Promise<Job[]> {
        return await this.jobRepository.find({
            where: {
                id,
            },
        })
    }
}
