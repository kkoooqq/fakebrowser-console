import {Connection, Repository} from 'typeorm'
import {JobGroup} from './jobgroup.entity'
import {DATABASE_CONNECTION, JOB_GROUP_REPOSITORY} from '../constants'

export const jobGroupProviders = [
    {
        provide: JOB_GROUP_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(JobGroup),
        inject: [DATABASE_CONNECTION],
    },
]
