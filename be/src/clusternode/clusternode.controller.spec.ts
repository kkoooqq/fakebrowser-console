import { Test, TestingModule } from '@nestjs/testing';
import { ClusternodeController } from './clusternode.controller';

describe('ClusternodeController', () => {
  let controller: ClusternodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClusternodeController],
    }).compile();

    controller = module.get<ClusternodeController>(ClusternodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
