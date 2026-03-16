import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SportActivity } from '../../models/sportInfo';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';

@Component({
  selector: 'sport-sport-card',
  imports: [CurrencyPipe, DatePipe, NgStyle],
  templateUrl: './sport-card.html',
  styleUrl: './sport-card.css',
})
export class SportCard {
  @Input ({required: true}) activity!: SportActivity;
  @Output() cardAction = new EventEmitter<number>();

  onBtnClick() {
    this.cardAction.emit(this.activity.id);
  }

  get isOngoing(): boolean {
    return this.activity.startDate <= new Date();
  }

}
