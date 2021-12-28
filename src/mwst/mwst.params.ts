import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class MwstParams {
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  price: number;
}

export class MwstQuery {
  @IsNumber()
  @Min(0)
  @Max(100)
  @Type(() => Number)
  @IsOptional()
  percentage: number;
}
