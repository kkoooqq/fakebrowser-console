import {Module} from '@nestjs/common'
import {DeviceDescGroupService} from './devicedesc-group.service'
import {DatabaseModule} from '../database/database.module'
import {DeviceDescGroupController} from './devicedesc-group.controller'
import {deviceDescGroupProviders} from './devicedesc-group.provider'

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
        DeviceDescGroupController,
    ],
    providers: [
        ...deviceDescGroupProviders,
        DeviceDescGroupService,
    ],
})
export class DevicedescGroupModule {}
