import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IBuyProps } from '../../models/CardItem';
import IBook from '../../models/Book';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.scss'],
})

export class BookComponentComponent implements OnInit {
  @Input() book: IBook;

  @Output() public Buy: EventEmitter<IBuyProps> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandler(book): void {
    this.Buy.emit({id: book.id, bookName: book.name});
  }
}
