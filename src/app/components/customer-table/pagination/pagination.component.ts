import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/shared/models/Customer';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() rows: Customer[];
  @Input() itemsPerPage: number;

  @Output() goToPageEvent = new EventEmitter<number>();

  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {}

  goToPage(page: number): void {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.goToPageEvent.emit(this.currentPage);
      // this.updateDisplayedRows();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.rows?.length / this.itemsPerPage);
  }
}
