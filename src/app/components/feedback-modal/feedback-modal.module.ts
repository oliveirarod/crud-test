import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackModalComponent } from './feedback-modal.component';

@NgModule({
  declarations: [FeedbackModalComponent],
  imports: [CommonModule],
  exports: [FeedbackModalComponent],
})
export class ModalModule {}
