import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsArticle } from '../../models/news.model';
import { NewsCardComponent } from '../news-card/news-card.component';
import { loadNews } from '../../store/news.actions';
import { selectAllArticles, selectLoading, selectError, selectSelectedCategory } from '../../store/news.selectors';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit {
  articles$: Observable<NewsArticle[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  selectedCategory$: Observable<string>;

  constructor(private store: Store) {
    this.articles$ = this.store.select(selectAllArticles);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }

  ngOnInit(): void {
    this.store.dispatch(loadNews({ category: 'general' }));
  }
}
