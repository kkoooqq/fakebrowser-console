import {Module} from '@nestjs/common'
import {DevicedescGroupService} from './devicedesc-group.service'

@Module({
    providers: [DevicedescGroupService],
})
export class DevicedescGroupModule {}
