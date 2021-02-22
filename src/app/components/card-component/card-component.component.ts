import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICardItem } from '../../models/CardItem';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardComponentComponent implements OnInit {
  @Input() purchases: ICardItem[];

  @Output() public addCount: EventEmitter<number> = new EventEmitter();
  @Output() public minusCount: EventEmitter<number> = new EventEmitter();
  @Output() public deleteCardItem: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddCount(id): void {
    this.addCount.emit(id);
  }

  onMinusCount(id):void {
    this.minusCount.emit(id);
  }

  onDeleteCardItem(id):void {
    this.deleteCardItem.emit(id);
  }
}
