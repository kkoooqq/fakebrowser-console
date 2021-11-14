import {DeleteResult, Repository, UpdateResult} from 'typeorm'
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
        return this.deviceDescRepository.create(dd)
    }

    async update(dd: DeviceDesc): Promise<UpdateResult> {
        return await this.deviceDescRepository.update(dd.id, dd)
    }

    async getAll(): Promise<DeviceDesc[]> {
        return await this.deviceDescRepository.find()
    }

    async delete(id): Promise<DeleteResult> {
        return await this.deviceDescRepository.delete(id)
    }
}
