import { Component } from '@angular/core';
import { SportCard } from "../../../shared/components/sport-card/sport-card";
import { SPORT_ACTIVITIES } from '../../../shared/mock-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sport-sport-list',
  imports: [SportCard, FormsModule],
  templateUrl: './sport-list.html',
  styleUrl: './sport-list.css',
})
export class SportList {
  public sportList = SPORT_ACTIVITIES;
  public searchQuery:string = 'begginer';

  handleCardAction(id: number) {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }
}
