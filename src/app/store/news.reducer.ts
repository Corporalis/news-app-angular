import { createReducer, on } from '@ngrx/store';
import { NewsArticle, NewsCategory } from '../models/news.model';
import * as NewsActions from './news.actions';

export interface NewsState {
  articles: NewsArticle[];
  categories: NewsCategory[];
  selectedCategory: string;
  loading: boolean;
  error: any;
}

export const initialState: NewsState = {
  articles: [],
  categories: [],
  selectedCategory: 'general',
  loading: false,
  error: null,
};

export const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadNews, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(NewsActions.loadNewsSuccess, (state, { articles }) => ({
    ...state,
    articles,
    loading: false,
    error: null,
  })),
  on(NewsActions.loadNewsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(NewsActions.changeCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  })),
  on(NewsActions.loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
  }))
);
