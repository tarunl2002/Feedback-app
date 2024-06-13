import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { FeedbackService, Feedback } from './feedback.service';  // Importing the interface
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('feedback')
@UseGuards(ThrottlerGuard)
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  getAllFeedback(): Feedback[] {  // Using the imported interface
    return this.feedbackService.getAllFeedbacks();
  }

  @Post()
  @Throttle({ default: { limit: 1, ttl: 10000 } })
  addFeedback(@Body() body: { name: string; feedback: string }): Feedback {  // Using the imported interface
    return this.feedbackService.addFeedback(body.name, body.feedback);
  }
}
