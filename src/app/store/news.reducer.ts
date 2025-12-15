import { createReducer, on } from '@ngrx/store';
import { NewsArticle, NewsCategory } from '../models/news.model';
import {
  changeCategory,
  loadCategoriesSuccess,
  loadNews,
  loadNewsFailure,
  loadNewsSuccess,
} from './news.actions';

export interface NewsState {
  readonly articles: NewsArticle[];
  readonly categories: NewsCategory[];
  readonly selectedCategory: string;
  readonly loading: boolean;
  readonly error: string | null;
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
  on(loadNews, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadNewsSuccess, (state, { articles }) => ({
    ...state,
    articles,
    loading: false,
    error: null,
  })),
  on(loadNewsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(changeCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  })),
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
  }))
);
