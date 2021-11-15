import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {DeleteResult, UpdateResult} from 'typeorm'
import {JobService} from './job.service'
import {Job} from './job.entity'

@Controller('/api/job')
export class JobController {
    constructor(
        private readonly deviceDescService: JobService,
    ) {
    }

    @Post()
    create(@Body() dd: Job): Promise<Job> {
        return this.deviceDescService.create(dd)
    }

    @Get()
    getAll(): Promise<Job[]> {
        return this.deviceDescService.getAll()
    }

    @Get('/page/:page/:per_page')
    getPage(@Param('page') page, @Param('per_page') per_page): Promise<[Job[], number]> {
        return this.deviceDescService.getPage(page, per_page)
    }

    @Get(':id')
    get(@Param('id') id): Promise<Job> {
        return this.deviceDescService.get(id)
    }

    @Put(':id')
    update(@Param('id') id, @Body() dd: Job): Promise<UpdateResult> {
        dd.id = Number(id)
        console.log('Update #' + dd.id)
        return this.deviceDescService.update(dd)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.deviceDescService.delete(id)
    }

}
