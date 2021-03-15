import { Injectable } from '@angular/core';
import { BOOKS } from 'src/app/mock-books';
import IBook from '../models/Book';

@Injectable()
export class BooksServiceService {
  books: IBook[] = BOOKS;

  getList() {
    return new Promise ((resolve) => {
      resolve(this.books);
    })
    // return this.books;
  }

  changeStatus(id) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        book.isAvailable = !book.isAvailable;
        return book;
      }
      return book;
    });
  }
}
