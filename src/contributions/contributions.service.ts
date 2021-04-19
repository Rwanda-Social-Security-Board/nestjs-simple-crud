import { Injectable } from '@nestjs/common';
import { CreateContributionsDto } from './dto/create-contributions.dto';

@Injectable()
export class ContributionsService {
  list: Record<string, string | number>[] = [
    {
      id: 1,
      amount: 3000,
      currency: 'RWF',
    },
  ];

  contributions(): Record<string, string | number>[] {
    return this.list;
  }

  create(payload: CreateContributionsDto): Record<string, string | number>[] {
    this.list.push({
      id: this.list.length + 1,
      ...payload,
    });
    return this.list;
  }
}
