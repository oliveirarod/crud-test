import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() successIcon: boolean;
  @Input() text: string = '';
  @Input() buttonText: string = 'ok';

  @Output() onClose = new EventEmitter();
  @Output() buttonClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
