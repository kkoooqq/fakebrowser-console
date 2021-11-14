import { Test, TestingModule } from '@nestjs/testing';
import { ClustergroupService } from './clustergroup.service';

describe('ClustergroupService', () => {
  let service: ClustergroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClustergroupService],
    }).compile();

    service = module.get<ClustergroupService>(ClustergroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
