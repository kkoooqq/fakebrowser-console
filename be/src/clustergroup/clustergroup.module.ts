import { Module } from '@nestjs/common';
import { ClustergroupController } from './clustergroup.controller';
import { ClustergroupService } from './clustergroup.service';

@Module({
  controllers: [ClustergroupController],
  providers: [ClustergroupService]
})
export class ClustergroupModule {}
