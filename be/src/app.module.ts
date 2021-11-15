import * as path from 'path'

import {Module} from '@nestjs/common'
import {ServeStaticModule} from '@nestjs/serve-static'

import {DeviceDescModule} from './devicedesc/devicedesc.module'
import {DevicedescGroupModule} from './devicedesc-group/devicedesc-group.module'
import {ClusternodeModule} from './clusternode/clusternode.module'
import {ClustergroupModule} from './clustergroup/clustergroup.module'
import {JobModule} from './job/job.module'
import {JobGroupModule} from './jobgroup/jobgroup.module'

import {AppController} from './app.controller'
import {AppService} from './app.service'
import {AppUploadService} from './app.uploadService'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '../../fe/dist/fakebrowser-console'),
        }),
        DeviceDescModule,
        DevicedescGroupModule,
        ClusternodeModule,
        ClustergroupModule,
        JobModule,
        JobGroupModule,
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
