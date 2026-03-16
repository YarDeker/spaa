import { Component } from '@angular/core';
import { SportCard } from "../../../shared/components/sport-card/sport-card";
import { SPORT_ACTIVITIES } from '../../../shared/mock-data';

@Component({
  selector: 'sport-sport-list',
  imports: [SportCard],
  templateUrl: './sport-list.html',
  styleUrl: './sport-list.css',
})
export class SportList {
  public sportList = SPORT_ACTIVITIES;

  handleCardAction(id: number) {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}
