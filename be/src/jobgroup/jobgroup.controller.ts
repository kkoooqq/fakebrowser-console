import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {JobGroupService} from './jobgroup.service'
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

    @Put('/active')
    async activeJobGroup(@Body() id: any): Promise<boolean> {
        await this.jobGroupService.activeJobGroup(id.id)
        return true
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
    async update(@Body() entity: JobGroup): Promise<boolean> {
        console.log('Update #' + entity.id)
        return (await this.jobGroupService.update(entity)).affected > 0
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<boolean> {
        return (await this.jobGroupService.delete(id)).affected > 0
    }

}
