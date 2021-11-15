import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm'
import {DeviceDesc} from './devicedesc.entity'
import {Inject, Injectable} from '@nestjs/common'
import {DEVICE_DESC_REPOSITORY} from '../constants'
import {helper} from '../helper'
import {UserAgentHelper} from '../UserAgentHelper'

@Injectable()
export class DeviceDescService {
    constructor(
        @Inject(DEVICE_DESC_REPOSITORY)
        private readonly deviceDescRepository: Repository<DeviceDesc>,
    ) {
    }

    async create(dd: DeviceDesc): Promise<DeviceDesc> {
        const insertResult: InsertResult = await this.deviceDescRepository.insert(dd)
        return insertResult.generatedMaps[0] as DeviceDesc
    }

    async update(dd: DeviceDesc): Promise<UpdateResult> {
        return await this.deviceDescRepository.update(dd.id, dd)
    }

    async getAll(): Promise<DeviceDesc[]> {
        return await this.deviceDescRepository.find()
    }

    async get(id: number): Promise<DeviceDesc> {
        return await this.deviceDescRepository.findOne(id)
    }

    async delete(id): Promise<DeleteResult> {
        return await this.deviceDescRepository.delete(id)
    }

    async getPage(page: number, per_page: number): Promise<[DeviceDesc[], number]> {
        return await this.deviceDescRepository.findAndCount({
            skip: page * per_page,
            take: per_page,
        })
    }

    async saveJson(json: string): Promise<DeviceDesc> {
        const jsonObj = JSON.parse(json)
        const jsonString = JSON.stringify(jsonObj)

        // check if md5 already exists
        const jsonMD5 = helper.md5(jsonString)

        if (await this.deviceDescRepository.count({
            where: {
                md5: jsonMD5,
            },
        })) {
            return null
        }

        // create new entity
        const entity = new DeviceDesc()
        entity.name = ''
        entity.group_id = 0
        entity.userAgent = jsonObj.navigator.userAgent
        entity.platform = UserAgentHelper.os(jsonObj.navigator.userAgent)
        entity.browser = UserAgentHelper.browserType(jsonObj.navigator.userAgent)
        entity.screen_width = jsonObj.screen.width
        entity.screen_height = jsonObj.screen.height
        entity.languages = jsonObj.navigator.languages.join(',')
        entity.deviceDesc = jsonString
        entity.md5 = jsonMD5
        entity.created = new Date()
        entity.updated = new Date()

        return await this.create(entity)
    }
}
