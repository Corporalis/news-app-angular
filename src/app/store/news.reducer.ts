import { createReducer, on } from '@ngrx/store';
import { NewsArticle } from '../models/news.model';
import * as NewsActions from './news.actions';

export interface NewsState {
  articles: NewsArticle[];
  selectedCategory: string;
  loading: boolean;
  error: any;
}

export const initialState: NewsState = {
  articles: [],
  selectedCategory: 'general',
  loading: false,
  error: null
};

export const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadNews, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(NewsActions.loadNewsSuccess, (state, { articles }) => ({
    ...state,
    articles,
    loading: false,
    error: null
  })),
  on(NewsActions.loadNewsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(NewsActions.changeCategory, (state, { category }) => ({
    ...state,
    selectedCategory: category
  }))
);
