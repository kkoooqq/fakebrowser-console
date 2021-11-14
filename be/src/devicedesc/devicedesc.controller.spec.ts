import { Test, TestingModule } from '@nestjs/testing';
import { DeviceDescController } from './devicedesc.controller';

describe('DevicedescController', () => {
  let controller: DeviceDescController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceDescController],
    }).compile();

    controller = module.get<DeviceDescController>(DeviceDescController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
