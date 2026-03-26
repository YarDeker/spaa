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
  public selectedCategory: string = 'All';

  ngOnInit() {
    this.sportService.getAll().subscribe(data => {
      this.allProducts = data;
      this.filteredProducts = [...data];
    });
  }

  getLevel () {
    return ['All', ...Object.values(DifficultyLevel)];
  }

  handleCardAction(id: number) {
    this.sportService.deleteItem(id);
     this.sportService.getAll().subscribe(data => {
      this.filteredProducts = [...data];
    });
  }

  filterItems() {
    this.filteredProducts = this.sportService.filterItems(this.searchQuery, this.selectedCategory)
  }

  resetFilters(searchInput:any) {
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.filterItems();

    searchInput.focus();
  }
}
