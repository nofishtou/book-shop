import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICardItem } from '../../models/CardItem';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() purchase: ICardItem;

  @Input() index: number;

  @Output() public addCount: EventEmitter<number> = new EventEmitter();

  @Output() public minusCount: EventEmitter<number> = new EventEmitter();

  @Output() public deleteCardItem: EventEmitter<number> = new EventEmitter();

  onAddCount(id): void {
    this.addCount.emit(id);
  }

  onMinusCount(id) {
    if (!this.purchase.count) {
      return;
    }
    this.minusCount.emit(id);
  }

  onDeleteCardItem(id) {
    this.deleteCardItem.emit(id);
  }
}
