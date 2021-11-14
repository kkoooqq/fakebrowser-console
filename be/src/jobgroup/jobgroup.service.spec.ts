import { Test, TestingModule } from '@nestjs/testing';
import { JobgroupService } from './jobgroup.service';

describe('JobgroupService', () => {
  let service: JobgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobgroupService],
    }).compile();

    service = module.get<JobgroupService>(JobgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
