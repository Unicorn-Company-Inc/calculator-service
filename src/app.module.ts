import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import { MwstModule } from './mwst/mwst.module';
import * as Joi from 'joi';

@Module({
  imports: [
    MwstModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'ci', 'staging', 'production', 'demo')
          .default('development'),
        PORT: Joi.number().default(3003),
        RABBITMQ_URL: Joi.string().uri(),
      }),
      load: [appConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
