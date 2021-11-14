import { Module } from '@nestjs/common';
import { JobgroupController } from './jobgroup.controller';
import { JobgroupService } from './jobgroup.service';

@Module({
  controllers: [JobgroupController],
  providers: [JobgroupService]
})
export class JobgroupModule {}
