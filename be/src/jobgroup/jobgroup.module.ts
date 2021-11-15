import {Module} from '@nestjs/common'
import {DatabaseModule} from '../database/database.module'
import {JobGroupController} from './jobgroup.controller'
import {JobGroupService} from './jobgroup.service'
import {jobGroupProviders} from './jobgroup.provider'

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
        JobGroupController,
    ],
    providers: [
        ...jobGroupProviders,
        JobGroupService,
    ],
})
export class JobGroupModule {}
