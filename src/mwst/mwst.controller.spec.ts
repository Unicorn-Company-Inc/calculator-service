import { Test, TestingModule } from '@nestjs/testing';
import { MwstController } from './mwst.controller';

describe('MwstController', () => {
  let controller: MwstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MwstController],
    }).compile();

    controller = module.get<MwstController>(MwstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
