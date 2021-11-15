import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common'
import {deviceDescProviders} from './devicedesc.provider'
import {DeviceDescService} from './devicedesc.service'
import {DeviceDesc} from './devicedesc.entity'
import {DeleteResult, UpdateResult} from 'typeorm'

@Controller('/api/devicedesc')
export class DeviceDescController {
    constructor(
        private readonly deviceDescService: DeviceDescService,
    ) {
    }

    @Post()
    create(@Body() dd: DeviceDesc): Promise<DeviceDesc> {
        return this.deviceDescService.create(dd)
    }

    @Get()
    getAll(): Promise<DeviceDesc[]> {
        return this.deviceDescService.getAll()
    }

    @Get('/page/:page/:per_page')
    getPage(@Param('page') page, @Param('per_page') per_page): Promise<[DeviceDesc[], number]> {
        return this.deviceDescService.getPage(page, per_page)
    }

    @Get(':id')
    get(@Param('id') id): Promise<DeviceDesc> {
        return this.deviceDescService.get(id)
    }

    @Put(':id')
    update(@Param('id') id, @Body() dd: DeviceDesc): Promise<UpdateResult> {
        dd.id = Number(id)
        console.log('Update #' + dd.id)
        return this.deviceDescService.update(dd)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<DeleteResult> {
        return this.deviceDescService.delete(id)
    }
}
