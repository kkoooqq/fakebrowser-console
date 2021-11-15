import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {DeviceDescGroupService} from './devicedesc-group.service'
import {DeleteResult, UpdateResult} from 'typeorm'
import {DeviceDescGroup} from './devicedesc-group.entity'

@Controller('/api/devicedesc-group')
export class DeviceDescGroupController {
    constructor(
        private readonly deviceDescGroupService: DeviceDescGroupService,
    ) {
    }

    @Post()
    create(@Body() dd: DeviceDescGroup): Promise<DeviceDescGroup> {
        return this.deviceDescGroupService.create(dd)
    }

    @Get()
    getAll(): Promise<DeviceDescGroup[]> {
        return this.deviceDescGroupService.getAll()
    }

    @Get('/page/:page/:per_page')
    getPage(@Param('page') page, @Param('per_page') per_page): Promise<DeviceDescGroup[]> {
        return this.deviceDescGroupService.getPage(page, per_page)
    }

    @Get(':id')
    get(@Param('id') id): Promise<DeviceDescGroup> {
        return this.deviceDescGroupService.get(id)
    }

    @Put(':id')
    update(@Param('id') id, @Body() dd: DeviceDescGroup): Promise<UpdateResult> {
        dd.id = Number(id)
        console.log('Update #' + dd.id)
        return this.deviceDescGroupService.update(dd)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.deviceDescGroupService.delete(id)
    }

}
