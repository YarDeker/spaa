import { Component, inject } from '@angular/core';
import { SportCard } from "../../../shared/components/sport-card/sport-card";
import { FormsModule } from '@angular/forms';
import { DifficultyLevel, SportActivity } from '../../../shared/models/sportInfo';
import { SportService } from '../../../sport-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sport-sport-list',
  imports: [SportCard, FormsModule, CommonModule],
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
    this.sportService.deleteItem(id);
  }

  filterItems(items: SportActivity[]) {
    return items.filter(val =>
      val.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedCategory === 'All' || val.difficulty === this.selectedCategory)
    );
  }

  resetFilters(searchInput: HTMLInputElement) {
    this.selectedCategory = 'All';
    this.searchQuery = '';
    searchInput.focus();
  }
}