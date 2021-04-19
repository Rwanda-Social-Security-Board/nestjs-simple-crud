import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ContributionsModule } from './contributions/contributions.module';
import { AllowedGuard } from './guards/allowed.guard';

@Module({
  imports: [ContributionsModule],
  providers: [{ provide: APP_GUARD, useClass: AllowedGuard }],
})
export class AppModule {}
