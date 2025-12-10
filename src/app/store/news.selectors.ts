import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NewsState } from './news.reducer';

export const selectNewsState = createFeatureSelector<NewsState>('news');

export const selectAllArticles = createSelector(
  selectNewsState,
  (state: NewsState) => state.articles
);

export const selectSelectedCategory = createSelector(
  selectNewsState,
  (state: NewsState) => state.selectedCategory
);

export const selectLoading = createSelector(
  selectNewsState,
  (state: NewsState) => state.loading
);

export const selectError = createSelector(
  selectNewsState,
  (state: NewsState) => state.error
);
