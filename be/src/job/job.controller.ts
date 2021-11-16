import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {JobService} from './job.service'
import {Job} from './job.entity'

@Controller('/api/job')
export class JobController {
    constructor(
        private readonly jobService: JobService,
    ) {
    }

    @Post()
    create(@Body() dd: Job): Promise<Job> {
        return this.jobService.create(dd)
    }

    @Get()
    getAll(): Promise<Job[]> {
        return this.jobService.getAll()
    }

    @Get('/page/:page/:per_page')
    getPage(@Param('page') page, @Param('per_page') per_page): Promise<[Job[], number]> {
        return this.jobService.getPage(page, per_page)
    }

    @Get(':id')
    get(@Param('id') id): Promise<Job> {
        return this.jobService.get(id)
    }

    @Put('/play')
    async play(@Body() id: any): Promise<boolean> {
        await this.jobService.play(id.id)
        return true
    }

    @Put()
    async update(@Body() dd: Job): Promise<boolean> {
        console.log('Update #' + dd.id)
        return (await this.jobService.update(dd)).affected > 0
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<boolean> {
        return (await this.jobService.delete(id)).affected > 0
    }

}
