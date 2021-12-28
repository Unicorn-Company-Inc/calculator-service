import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MwstModule } from './mwst/mwst.module';

@Module({
  imports: [MwstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
