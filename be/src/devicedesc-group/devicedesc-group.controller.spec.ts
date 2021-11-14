import { Test, TestingModule } from '@nestjs/testing';
import { DevicedescGroupController } from './devicedesc-group.controller';

describe('DevicedescGroupController', () => {
  let controller: DevicedescGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicedescGroupController],
    }).compile();

    controller = module.get<DevicedescGroupController>(DevicedescGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
