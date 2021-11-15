import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {JobGroupService} from './jobgroup.service'
import {DeleteResult, UpdateResult} from 'typeorm'
import {JobGroup} from './jobgroup.entity'

@Controller('/api/jobgroup')
export class JobGroupController {
    constructor(
        private readonly jobGroupService: JobGroupService,
    ) {
    }

    @Post()
    create(@Body() entity: JobGroup): Promise<JobGroup> {
        return this.jobGroupService.create(entity)
    }

    @Get()
    getAll(): Promise<JobGroup[]> {
        return this.jobGroupService.getAll()
    }

    @Get(':id')
    get(@Param('id') id): Promise<JobGroup> {
        return this.jobGroupService.get(id)
    }

    @Put()
    update(@Body() entity: JobGroup): Promise<UpdateResult> {
        console.log('Update #' + entity.id)
        return this.jobGroupService.update(entity)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.jobGroupService.delete(id)
    }

}
