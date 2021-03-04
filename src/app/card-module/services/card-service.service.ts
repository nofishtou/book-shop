import { Injectable } from '@angular/core';
import IBook from 'src/app/books-module/models/Book';
import { BooksServiceService } from 'src/app/books-module/services/books-service.service';
import { ICardItem } from '../models/CardItem';

@Injectable()
export class CardServiceService {
  purchases: ICardItem[] = [];

  CartProduct: IBook[] = [];

  totalQuantity = 0;

  totalSum = 0;

  constructor(private BookService: BooksServiceService) {}

  addBook(book) {
    const { id, name, price } = book;
    this.CartProduct.push(book);
    this.purchases.push({ id, name, price, count: 1 });
    this.BookService.changeStatus(book.id);
    this.updateCartData();
  }

  removeBook(id) {
    const index = this.purchases.findIndex((p) => p.id === id);
    this.purchases.splice(index, 1);
    this.BookService.changeStatus(id);
  }

  increaseQuantity(id) {
    this.purchases.forEach((purchase) => {
      if (purchase.id === id) {
        purchase.count += 1;
        return purchase;
      }
      return purchase;
    });
    this.updateCartData();
  }

  decreaseQuantity(id) {
    this.purchases.forEach((purchase) => {
      if (purchase.id === id) {
        purchase.count -= 1;
        return purchase;
      }
      return purchase;
    });
    this.updateCartData();
  }

  updateCartData() {
    this.totalQuantity = this.purchases.reduce((acc, p) => {
      acc += p.count;
      return acc;
    }, 0);

    this.totalSum = this.purchases.reduce((acc, p) => {
      acc += p.count * p.price;
      return acc;
    }, 0);
  }

  getPurchases(): ICardItem[] {
    return this.purchases;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }
}
