import { Test, TestingModule } from '@nestjs/testing';
import { MwstService } from './mwst.service';

describe('MwstService', () => {
  let service: MwstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MwstService],
    }).compile();

    service = module.get<MwstService>(MwstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateMwst', () => {
    it('should return the mwst (integer)', async () => {
      const result = 19;
      const price = 100;
      expect(await service.calculateMwst(price)).toBe(result);
    });
    it('should return the mwst (float)', async () => {
      const result = 9.5;
      const price = 50;
      expect(await service.calculateMwst(price)).toBe(result);
    });
    it('should return the rounded mwst (float)', async () => {
      const result = 9.6;
      const price = 50.5;
      expect(await service.calculateMwst(price)).toBe(result);
    });
    it('should return 0 mwst', async () => {
      const result = 0;
      const price = 0;
      expect(await service.calculateMwst(price)).toBe(result);
    });
    it('should return custom mwst percentage', async () => {
      const result = 1;
      const price = 100;
      const percentage = 1;
      expect(await service.calculateMwst(price, percentage)).toBe(result);
    });
    it('should return rounded custom mwst percentage', async () => {
      const result = 1.11;
      const price = 100;
      const percentage = 1.11111;
      expect(await service.calculateMwst(price, percentage)).toBe(result);
    });
  });
});
