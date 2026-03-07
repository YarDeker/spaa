import { Component, Input } from '@angular/core';
import { SportActivity } from '../../models/sportInfo';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'sport-sport-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './sport-card.html',
  styleUrl: './sport-card.css',
})
export class SportCard {
  @Input ({required: true}) activity!: SportActivity;
}
