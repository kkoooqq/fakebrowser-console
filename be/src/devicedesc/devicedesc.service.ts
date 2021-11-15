import {DeleteResult, InsertResult, Repository, UpdateResult} from 'typeorm'
import {DeviceDesc} from './devicedesc.entity'
import {Inject, Injectable} from '@nestjs/common'
import {DEVICE_DESC_REPOSITORY} from '../constants'

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

    async getPage(page: number, per_page: number): Promise<[DeviceDesc[], number]> {
        return await this.deviceDescRepository.findAndCount({
            skip: page * per_page,
            take: per_page,
        })
    }

    async delete(id): Promise<DeleteResult> {
        return await this.deviceDescRepository.delete(id)
    }
}
