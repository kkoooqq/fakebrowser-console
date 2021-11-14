import { Test, TestingModule } from '@nestjs/testing';
import { ClustergroupController } from './clustergroup.controller';

describe('ClustergroupController', () => {
  let controller: ClustergroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClustergroupController],
    }).compile();

    controller = module.get<ClustergroupController>(ClustergroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
