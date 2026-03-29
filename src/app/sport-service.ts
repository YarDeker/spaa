import { Injectable } from '@angular/core';
import { SPORT_ACTIVITIES } from './shared/mock-data';
import { BehaviorSubject, debounceTime, delay, distinctUntilChanged, map, Observable, of } from 'rxjs';
import { SportActivity } from './shared/models/sportInfo';
import { FilterOptions } from './filter-options';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private items = SPORT_ACTIVITIES;
  private itemsSubject$ = new BehaviorSubject<SportActivity[]>(this.items);
  public items$ = this.itemsSubject$.asObservable();

  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    category: 'All'
  });

  constructor() {
    this.filterSubject$
      .pipe(
        debounceTime(500),
        distinctUntilChanged((prev, curr) =>
          JSON.stringify(prev) === JSON.stringify(curr)
        ),
        map(options => {
          return this.items.filter(item => {
            const matchesQuery = item.title
              .toLowerCase()
              .includes(options.query.toLowerCase());

            const matchesCategory =
              options.category === 'All' ||
              item.difficulty === options.category;

            return matchesQuery && matchesCategory;
          });
        })
      )
      .subscribe(filteredResult => {
        this.itemsSubject$.next(filteredResult);
      });
  }
  
  getAll():Observable<SportActivity[]> {
    return this.items$;
  }

  getById (id: number | string): Observable<SportActivity | undefined> {
    const item = this.items.find(item => item.id === +id);
    return of(item).pipe(delay(1000));
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.filterSubject$.next(this.filterSubject$.value);
  }

  filterItems(options: FilterOptions) {
    this.filterSubject$.next(options);
  }

}
