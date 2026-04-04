import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, delay, distinctUntilChanged, map, Observable, of, tap, throwError } from 'rxjs';
import { SportActivity } from './shared/models/sportInfo';
import { FilterOptions } from './filter-options';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private http = inject(HttpClient)
  private toastr = inject(ToastrService);
  private items:SportActivity[] = [];
  private itemsSubject$ = new BehaviorSubject<SportActivity[]>(this.items);
  public items$ = this.itemsSubject$.asObservable();

  private filterSubject$ = new BehaviorSubject<FilterOptions>({
    query: '',
    category: 'All'
  });

  constructor() {
    this.loadInitialData()
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

  loadInitialData() {
    this.http.get<SportActivity[]>('items')
    .pipe(
      catchError((error) => {
        this.toastr.error('Не вдалося з\'єднатися з сервером', 'Помилка мережі');
        return throwError(() => error);
      })
    )
    .subscribe(data => {
      this.items = data
      this.itemsSubject$.next(data)
    })
  }
  
  getAll():Observable<SportActivity[]> {
    return this.items$;
  }

  getById (id: number | string): Observable<SportActivity | undefined> {
    const item = this.items.find(item => item.id === +id);
    return of(item).pipe(delay(1000));
  }

  addItem(newItem: SportActivity) {
    this.http.post("items", newItem).pipe(        
      tap(() => {
        this.loadInitialData()
        this.toastr.success('Елемент успішно додано!', 'Успіх');
      }),
      catchError((error) => {
        this.toastr.error('Не вдалося з\'єднатися з сервером', 'Помилка мережі');
        return throwError(() => error);
      })
      ).subscribe()
  }

  deleteItem(id: number) {
    this.http.delete("items/" + id)
    .pipe(
      tap(() => {
        this.loadInitialData()
        this.toastr.info('Елемент видалено', 'Інфо');
      }),
      catchError((error) => {
          this.toastr.error('Не вдалося з\'єднатися з сервером', 'Помилка мережі');
          return throwError(() => error);
      })
    )
    .subscribe()
  }

  filterItems(options: FilterOptions) {
    this.filterSubject$.next(options);
  }

}
