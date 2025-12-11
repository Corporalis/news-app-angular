import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsArticle } from '../../models/news.model';
import {
  selectAllArticles,
  selectError,
  selectLoading,
  selectSelectedCategory,
} from '../../store/news.selectors';
import { NewsListComponent } from '../news-list/news-list.component';

@Component({
  selector: 'app-news-list-container',
  standalone: true,
  imports: [CommonModule, NewsListComponent],
  template: `
    <app-news-list
      [articles]="articles$ | async"
      [loading]="loading$ | async"
      [error]="error$ | async"
      [selectedCategory]="selectedCategory$ | async"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListContainerComponent {
  readonly articles$: Observable<NewsArticle[]>;
  readonly loading$: Observable<boolean>;
  readonly error$: Observable<string | null>;
  readonly selectedCategory$: Observable<string>;

  constructor(private readonly store: Store) {
    this.articles$ = this.store.select(selectAllArticles);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }
}
