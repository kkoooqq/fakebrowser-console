import {Module} from '@nestjs/common'

import {DeviceDescModule} from './devicedesc/devicedesc.module'
import {DevicedescGroupModule} from './devicedesc-group/devicedesc-group.module'
import {ClusternodeModule} from './clusternode/clusternode.module'
import {ClustergroupModule} from './clustergroup/clustergroup.module'
import {JobModule} from './job/job.module'
import {JobgroupModule} from './jobgroup/jobgroup.module'

import {AppController} from './app.controller'
import {AppService} from './app.service'
import {AppUploadService} from './app.uploadService'

@Module({
    imports: [
        DeviceDescModule,
        DevicedescGroupModule,
        ClusternodeModule,
        ClustergroupModule,
        JobModule,
        JobgroupModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
        AppUploadService,
    ],
})
export class AppModule {
}
