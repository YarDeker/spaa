import { Injectable } from '@angular/core';
import { SPORT_ACTIVITIES } from './shared/mock-data';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private items = SPORT_ACTIVITIES;
  
  getAll() {
    return [...this.items];
  }

  getById (id: number) {
    return this.items.find(item => item.id === id) || null;
  }
}
