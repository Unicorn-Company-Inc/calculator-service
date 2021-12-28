import { Module } from '@nestjs/common';
import { MwstController } from './mwst.controller';
import { MwstService } from './mwst.service';

@Module({
  controllers: [MwstController],
  providers: [MwstService]
})
export class MwstModule {}
