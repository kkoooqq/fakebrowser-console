import {Connection, Repository} from 'typeorm'
import {DeviceDesc} from './devicedesc.entity'
import {DATABASE_CONNECTION, DEVICE_DESC_REPOSITORY} from '../constants'

export const deviceDescProviders = [
    {
        provide: DEVICE_DESC_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(DeviceDesc),
        inject: [DATABASE_CONNECTION],
    },
]
