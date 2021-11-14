import { Test, TestingModule } from '@nestjs/testing';
import { DevicedescController } from './devicedesc.controller';

describe('DevicedescController', () => {
  let controller: DevicedescController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicedescController],
    }).compile();

    controller = module.get<DevicedescController>(DevicedescController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
