import {Module} from '@nestjs/common'
import {JobController} from './job.controller'
import {JobService} from './job.service'
import {DatabaseModule} from '../database/database.module'
import {jobProviders} from './job.provider'
import {deviceDescProviders} from '../devicedesc/devicedesc.provider'
import {DeviceDescService} from '../devicedesc/devicedesc.service'

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
        JobController,
    ],
    providers: [
        ...jobProviders,
        ...deviceDescProviders,
        JobService,
        DeviceDescService,
    ],
})
export class JobModule {}
