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
});
