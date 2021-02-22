import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICardItem } from '../../../models/CardItem';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardItemComponent implements OnInit {
  @Input() purchase: ICardItem;
  @Input() index: number;

  @Output() public addCount: EventEmitter<number> = new EventEmitter();
  @Output() public minusCount: EventEmitter<number> = new EventEmitter();
  @Output() public deleteCardItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddCount(id): void {
    this.addCount.emit(id);
  }

  onMinusCount(id) {
    if(!this.purchase.count) {
      return;
    }
    this.minusCount.emit(id);
  }

  onDeleteCardItem(id) {
    this.deleteCardItem.emit(id);
  }
}
