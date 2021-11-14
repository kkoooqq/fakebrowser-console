import { Test, TestingModule } from '@nestjs/testing';
import { JobgroupController } from './jobgroup.controller';

describe('JobgroupController', () => {
  let controller: JobgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobgroupController],
    }).compile();

    controller = module.get<JobgroupController>(JobgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
