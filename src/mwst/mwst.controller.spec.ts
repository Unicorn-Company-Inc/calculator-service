import { Test, TestingModule } from '@nestjs/testing';
import { MwstController } from './mwst.controller';
import { MwstService } from './mwst.service';

describe('MwstController', () => {
  let controller: MwstController;
  let service: MwstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MwstController],
      providers: [MwstService],
    }).compile();

    controller = module.get<MwstController>(MwstController);
    service = module.get<MwstService>(MwstService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getMwst', () => {
    it('should return mwst', async () => {
      const result = 19;
      const params = { price: 100 };
      const query = { percentage: undefined };

      expect(await controller.getMwst(params, query)).toBe(result);
    });
    it('should return mwst with custom percentage', async () => {
      const result = 1;
      const params = { price: 100 };
      const query = { percentage: 1 };

      expect(await controller.getMwst(params, query)).toBe(result);
    });
  });
});
