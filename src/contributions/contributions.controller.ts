import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { CreateContributionsDto } from './dto/create-contributions.dto';

@Controller('contributions')
export class ContributionsController {
  constructor(private readonly service: ContributionsService) {}

  @Get()
  listOfContributions(): Record<string, string | number>[] {
    return this.service.contributions();
  }

  @Post()
  createContributions(
    @Body() payload: CreateContributionsDto,
  ): Record<string, string | number> {
    return this.service.create(payload);
  }
}
