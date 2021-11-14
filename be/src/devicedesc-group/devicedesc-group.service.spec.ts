import { Test, TestingModule } from '@nestjs/testing';
import { DevicedescGroupService } from './devicedesc-group.service';

describe('DevicedescGroupService', () => {
  let service: DevicedescGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevicedescGroupService],
    }).compile();

    service = module.get<DevicedescGroupService>(DevicedescGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
