import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardServiceService } from 'src/app/card-module/services/card-service.service';
import IBook from '../../models/Book';
import { BooksServiceService } from '../../services/books-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[];

  @Output() public Buy = new EventEmitter();

  constructor(private BookService: BooksServiceService, private CardService: CardServiceService) {}

  ngOnInit(): void {
    this.books = this.BookService.getList();
  }

  onBuyHandler(book): void {
    this.CardService.addBook(book);
  }

  trackIsAvailable(index, book) {
    return book.isAvailable;
  }
}
