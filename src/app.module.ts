import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    FeedbackModule,
    ThrottlerModule.forRoot([
    {
      ttl: 10, 
      limit: 1,
    }
  ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
