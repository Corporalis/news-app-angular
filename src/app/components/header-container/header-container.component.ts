import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsCategory } from '../../models/news.model';
import { selectCategories } from '../../store/news.selectors';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `<app-header [categories]="(categories$ | async) || []"></app-header>`,
})
export class HeaderContainerComponent {
  categories$: Observable<NewsCategory[]>;

  constructor(private store: Store) {
    this.categories$ = this.store.select(selectCategories);
  }
}
