import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsArticle } from '../../models/news.model';
import { loadNews } from '../../store/news.actions';
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
    ></app-news-list>
  `,
})
export class NewsListContainerComponent implements OnInit {
  articles$: Observable<NewsArticle[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  selectedCategory$: Observable<string>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.articles$ = this.store.select(selectAllArticles);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['category']) {
        this.store.dispatch(loadNews({ category: data['category'] }));
      } else {
        this.route.url.subscribe((urlSegments) => {
          const category = urlSegments[0]?.path || 'general';
          this.store.dispatch(loadNews({ category }));
        });
      }
    });
  }
}
