import { Component, inject } from '@angular/core';
import { SportCard } from "../../../shared/components/sport-card/sport-card";
import { SPORT_ACTIVITIES } from '../../../shared/mock-data';
import { FormsModule } from '@angular/forms';
import { DifficultyLevel, SportActivity } from '../../../shared/models/sportInfo';
import { SportService } from '../../../sport-service';

@Component({
  selector: 'sport-sport-list',
  imports: [SportCard, FormsModule],
  templateUrl: './sport-list.html',
  styleUrl: './sport-list.css',
}) 
export class SportList {
  public sportService = inject(SportService);
  public allProducts:SportActivity[] = [];
  public filteredProducts = this.allProducts;
  public searchQuery:string = '';
  public levels:string[] = this.getLevel();
  public selectedCategory: string = '';

  ngOnInit() {
    this.allProducts = this.sportService.getAll();
    this.filteredProducts = [...this.sportService.getAll()];
  }

  getLevel () {
    return ['All', ...Object.values(DifficultyLevel)];
  }

  handleCardAction(id: number) {
    this.sportService.deleteItem(id);
    this.filteredProducts = [...this.sportService.getAll()]
  }

  filterItems() {
    this.filteredProducts = this.allProducts.filter(val => 
      val.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedCategory === 'All' || val.difficulty === this.selectedCategory)
    )
  }

  resetFilters(searchInput:any) {
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.filterItems();

    searchInput.focus();
  }
}
