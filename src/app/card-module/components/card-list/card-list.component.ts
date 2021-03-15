import { Component, OnInit } from '@angular/core';
import { ICardItem } from '../../models/CardItem';
import { CardServiceService } from '../../services/card-service.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  purchases: ICardItem[] = [];

  sortBy: string = 'name';

  sortType: string = 'descending';

  totalQuantity = 0;

  totalSum = 0;

  constructor(public CardService: CardServiceService) {}

  ngOnInit(): void {
    this.purchases = this.CardService.getPurchases();
  }

  onAddCount(id): void {
    this.CardService.increaseQuantity(id);
  }

  onMinusCount(id): void {
    this.CardService.decreaseQuantity(id);
  }

  onDeleteCardItem(id): void {
    this.CardService.removeBook(id);
  }

  trackByCount(index, cardItem): number {
    return cardItem.count;
  }

  onChangeSortTypeHandler(e) {
    this.sortType = e.target.value;
  }

  onChangeSortByHandler(e) {
    this.sortBy = e.target.value;
  }
}
