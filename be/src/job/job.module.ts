import {Module} from '@nestjs/common'
import {JobController} from './job.controller'
import {JobService} from './job.service'
import {DatabaseModule} from '../database/database.module'
import {jobProviders} from './job.provider'

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
        JobController,
    ],
    providers: [
        ...jobProviders,
        JobService,
    ],
})
export class JobModule {}
