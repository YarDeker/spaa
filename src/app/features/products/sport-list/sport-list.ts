import { Component, inject } from '@angular/core';
import { SportCard } from "../../../shared/components/sport-card/sport-card";
import { FormsModule } from '@angular/forms';
import { DifficultyLevel, SportActivity } from '../../../shared/models/sportInfo';
import { SportService } from '../../../sport-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FilterOptions } from '../../../filter-options';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'sport-sport-list',
  imports: [SportCard, FormsModule, CommonModule, RouterLink],
  templateUrl: './sport-list.html',
  styleUrl: './sport-list.css',
}) 
export class SportList {
  public sportService = inject(SportService);

  public searchQuery: string = '';
  public selectedCategory: string = 'All';
  public levels: string[] = this.getLevel();

  products$!: Observable<SportActivity[]>;

  ngOnInit() {
    this.products$ = this.sportService.getAll();
  }

  getLevel() {
    return ['All', ...Object.values(DifficultyLevel)];
  }

  handleCardAction(id: number) {
    console.log(id)

    this.sportService.deleteItem(id);
  }

  onFilterChange() {
    const options: FilterOptions = {
      query: this.searchQuery,
      category: this.selectedCategory
    };

    this.sportService.filterItems(options);
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.onFilterChange();
  }
}