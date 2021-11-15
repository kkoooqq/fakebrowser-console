import {Module} from '@nestjs/common'
import {DatabaseModule} from '../database/database.module'
import {JobGroupController} from './jobgroup.controller'
import {JobGroupService} from './jobgroup.service'
import {jobGroupProviders} from './jobgroup.provider'
import {jobProviders} from '../job/job.provider'

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
        JobGroupController,
    ],
    providers: [
        ...jobGroupProviders,
        ...jobProviders,
        JobGroupService,
    ],
})
export class JobGroupModule {}
