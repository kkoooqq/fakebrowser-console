import {Controller, Get, Post, Req, Res} from '@nestjs/common'
import {Request, Response} from 'express'
import {AppService} from './app.service'
import {AppUploadService} from './app.uploadService'

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly appUploadService: AppUploadService,
    ) {
    }

    @Post('/upload')
    upload(@Req() request: Request, @Res() response: Response) {
        this.appUploadService.upload(request, response)
    }
}
