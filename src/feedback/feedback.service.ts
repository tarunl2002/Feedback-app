import { Injectable } from '@nestjs/common';

export interface Feedback {  // Exporting the interface
  id: number;
  name: string;
  feedback: string;
}

@Injectable()
export class FeedbackService {
  private feedbacks: Feedback[] = [];
  private idCounter = 1;

  getAllFeedbacks(): Feedback[] {
    return this.feedbacks;
  }

  addFeedback(name: string, feedback: string): Feedback {
    const newFeedback: Feedback = {
      id: this.idCounter++,
      name,
      feedback,
    };
    this.feedbacks.push(newFeedback);
    return newFeedback;
  }
}
