import { Controller, Get, Param, Query } from '@nestjs/common';
import { MwstParams, MwstQuery } from './mwst.params';
import { MwstService } from './mwst.service';

@Controller('mwst')
export class MwstController {
  constructor(private readonly mwstService: MwstService) {}

  @Get(':price')
  async getMwst(@Param() params: MwstParams, @Query() query: MwstQuery) {
    return this.mwstService.calculateMwst(params.price, query.percentage);
  }
}
