import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {AppUploadService} from './app.uploadService'
import {DevicedescGroupController} from './devicedesc-group/devicedesc-group.controller'
import {DevicedescController} from './devicedesc/devicedesc.controller'

@Module({
    imports: [],
    controllers: [AppController, DevicedescGroupController, DevicedescController],
    providers: [AppService, AppUploadService],
})
export class AppModule {
}
