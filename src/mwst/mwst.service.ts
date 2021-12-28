import { Injectable } from '@nestjs/common';

@Injectable()
export class MwstService {
  calculateMwst(price: number, percentage = 19) {
    const mwst = price * percentage;
    return Math.round(mwst) / 100;
  }
}
