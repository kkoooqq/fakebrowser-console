import {Connection, Repository} from 'typeorm'
import {DeviceDescGroup} from './devicedesc-group.entity'
import {DATABASE_CONNECTION, DEVICE_DESC_GROUP_REPOSITORY} from '../constants'

export const deviceDescGroupProviders = [
    {
        provide: DEVICE_DESC_GROUP_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(DeviceDescGroup),
        inject: [DATABASE_CONNECTION],
    },
]
