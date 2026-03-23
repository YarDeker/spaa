import { Component } from '@angular/core';
import { SportCard } from "../../../shared/components/sport-card/sport-card";
import { SPORT_ACTIVITIES } from '../../../shared/mock-data';
import { FormsModule } from '@angular/forms';
import { DifficultyLevel } from '../../../shared/models/sportInfo';

@Component({
  selector: 'sport-sport-list',
  imports: [SportCard, FormsModule],
  templateUrl: './sport-list.html',
  styleUrl: './sport-list.css',
})
export class SportList {
  public allProducts = SPORT_ACTIVITIES;
  public filteredProducts = this.allProducts;
  public searchQuery:string = '';
  public levels:string[] | null = this.getLevel();
  public selectedCategory: string = '';

  getLevel () {
    return ['All', ...Object.values(DifficultyLevel)];
  }

  handleCardAction(id: number) {
    console.log(`Користувач натиснув кнопку на товарі з ID: ${id}`);
  }

  filterItems() {
    this.filteredProducts = this.allProducts.filter(val => 
      val.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedCategory === 'All' || val.difficulty === this.selectedCategory)
    )
  }
}
