import {Inject, Injectable} from '@nestjs/common'
import {DEVICE_DESC_GROUP_REPOSITORY} from '../constants'
import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm'
import {DeviceDescGroup} from './devicedesc-group.entity'

@Injectable()
export class DeviceDescGroupService {
    constructor(
        @Inject(DEVICE_DESC_GROUP_REPOSITORY)
        private readonly deviceDescGroupRepository: Repository<DeviceDescGroup>,
    ) {
    }

    async create(dd: DeviceDescGroup): Promise<DeviceDescGroup> {
        const insertResult: InsertResult = await this.deviceDescGroupRepository.insert(dd)
        return insertResult.generatedMaps[0] as DeviceDescGroup
    }

    async update(dd: DeviceDescGroup): Promise<UpdateResult> {
        return await this.deviceDescGroupRepository.update(dd.id, dd)
    }

    async getAll(): Promise<DeviceDescGroup[]> {
        return await this.deviceDescGroupRepository.find()
    }

    async get(id: number): Promise<DeviceDescGroup> {
        return await this.deviceDescGroupRepository.findOne(id)
    }

    async getPage(page: number, per_page: number): Promise<DeviceDescGroup[]> {
        return await this.deviceDescGroupRepository.find({
            skip: (page - 1) * per_page,
            take: per_page,
        })
    }

    async delete(id): Promise<DeleteResult> {
        return await this.deviceDescGroupRepository.delete(id)
    }
}
