import { Injectable } from '@angular/core';
import { SPORT_ACTIVITIES } from './shared/mock-data';
import { delay, Observable, of } from 'rxjs';
import { SportActivity } from './shared/models/sportInfo';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private items = SPORT_ACTIVITIES;
  
  getAll():Observable<SportActivity[]> {
    return of(this.items).pipe(
      delay(1000)
    );
  }

  getById (id: number) {
    return this.items.find(item => item.id === id) || null;
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id)
    return this.getAll();
  }

  filterItems(str: string, category: string) {
    return this.items.filter(val => 
      val.title.toLowerCase().includes(str.toLowerCase()) &&
      (category === 'All' || val.difficulty === category)
    )
  }
}
