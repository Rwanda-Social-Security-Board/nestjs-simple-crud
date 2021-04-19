import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

enum Currency {
  RWF = 'RWF',
  USD = 'USD',
}

export class CreateContributionsDto {
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;

  @IsNotEmpty()
  @IsEnum(Currency)
  readonly currency: Currency;
}
