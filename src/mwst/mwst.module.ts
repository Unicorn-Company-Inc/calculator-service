import { RabbitMQConfig, RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MwstController } from './mwst.controller';
import { MwstService } from './mwst.service';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): RabbitMQConfig => ({
        exchanges: [
          {
            name: 'mwst',
            type: 'topic',
          },
        ],
        uri: configService.get('app.rabbitmqUrl'),
        connectionInitOptions: { wait: false },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MwstController],
  providers: [MwstService],
})
export class MwstModule {}
