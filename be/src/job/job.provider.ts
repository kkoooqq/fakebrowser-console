import {Connection, Repository} from 'typeorm'
import {Job} from './job.entity'
import {DATABASE_CONNECTION, JOB_REPOSITORY} from '../constants'

export const jobProviders = [
    {
        provide: JOB_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(Job),
        inject: [DATABASE_CONNECTION],
    },
]
