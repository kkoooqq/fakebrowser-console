import { Test, TestingModule } from '@nestjs/testing';
import { ClusternodeService } from './clusternode.service';

describe('ClusternodeService', () => {
  let service: ClusternodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClusternodeService],
    }).compile();

    service = module.get<ClusternodeService>(ClusternodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
