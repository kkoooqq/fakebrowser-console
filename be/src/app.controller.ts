import * as path from 'path'

import {Controller, Get, HttpCode, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common'
import {Request, Response} from 'express'
import {AppService} from './app.service'
import {AppUploadService} from './app.uploadService'
import {FileInterceptor, FilesInterceptor, MulterModule} from '@nestjs/platform-express'

MulterModule.register({
    dest: path.resolve(__dirname, '../uploads'),
})

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly appUploadService: AppUploadService,
    ) {
    }

    @Post('/api/upload')
    @HttpCode(200)
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
        return file
    }
}
