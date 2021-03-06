import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MwstService {
  calculateMwst(price: number, percentage = 19) {
    const mwst = price * percentage;
    return Math.round(mwst) / 100;
  }

  @RabbitRPC({
    exchange: 'mwst',
    routingKey: 'rpc',
    queue: 'mwst-queue',
  })
  public async mwstRpcHandler(price: number) {
    return this.calculateMwst(price);
  }
}
