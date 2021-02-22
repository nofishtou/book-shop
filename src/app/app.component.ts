import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import IBook from './models/Book';
import { ICardItem, IBuyProps } from './models/CardItem';
import { BOOKS } from './mock-books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked{
  books: IBook[] = BOOKS;
  purchases: ICardItem[] = [];
  title = 'book-shop';

  @ViewChild('mainTitle') mainTitle: ElementRef;

  constructor() {}

  ngAfterViewChecked(){
    this.mainTitle.nativeElement.textContent = this.title.toUpperCase();
  }

  onBuyHandler(buyProps: IBuyProps): void {
    const { id, bookName } = buyProps;
    const purchases = [...this.purchases];
    purchases.push({  id, bookName, count: 1 });
    this.changeAvailableStatus(id);
    this.purchases = [...purchases];
  }

  onAddCount(id): void {
    this.purchases = this.purchases.map((purchase) => {
      if(purchase.id === id) {
        purchase.count +=1;
        return purchase;
      }
      return purchase;
    })
  }

  onMinusCount(id):void {
    this.purchases = this.purchases.map((p) => {
      if(p.id === id) {
        p.count -=1;
        return p;
      }
      return p;
    });
  }

  changeAvailableStatus(id) {
    this.books = this.books.map((book) => {
      if(book.id === id) {
        book.isAvailable = !book.isAvailable;
        return book;
      }
      return book;
    })
  }

  onDeleteCardItem(id):void {
    this.changeAvailableStatus(id);
    this.purchases = this.purchases.filter((purchase) => purchase.id !== id);
  }
}
