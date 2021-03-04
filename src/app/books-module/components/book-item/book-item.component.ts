import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import IBook from '../../models/Book';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent {
  @Input() book: IBook;

  @Output() public Buy = new EventEmitter();

  onClickHandler(book): void {
    this.Buy.emit(book);
  }
}
