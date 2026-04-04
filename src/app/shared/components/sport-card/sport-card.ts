import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SportActivity } from '../../models/sportInfo';
import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { RouterLink } from "@angular/router";
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { StatusColorPipe } from '../../pipes/status-color-pipe';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'sport-sport-card',
  imports: [
    CurrencyPipe, 
    DatePipe, 
    RouterLink, 
    TruncatePipe, 
    StatusColorPipe, 
    Highlight,
  ],
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
