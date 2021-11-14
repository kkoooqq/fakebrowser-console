import {Module} from '@nestjs/common'
import {DatabaseModule} from '../database/database.module'
import {deviceDescProviders} from './devicedesc.provider'
import {DeviceDescService} from './devicedesc.service'
import {DeviceDescController} from './devicedesc.controller'

@Module({
    imports: [
        DatabaseModule,
    ],
    controllers: [
        DeviceDescController
    ],
    providers: [
        ...deviceDescProviders,
        DeviceDescService,
    ],
})
export class DeviceDescModule {}
