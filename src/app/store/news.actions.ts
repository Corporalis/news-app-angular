import { createAction, props } from '@ngrx/store';
import { NewsArticle, NewsCategory } from '../models/news.model';

// Load News
export const loadNews = createAction('[News/API] Load News', props<{ category: string }>()); 

export const loadNewsSuccess = createAction(
  '[News/API] Load News Success',
  props<{ articles: NewsArticle[] }>()
);

export const loadNewsFailure = createAction(
  '[News/API] Load News Failure',
  props<{ error: string }>()
);

// Change Category
export const changeCategory = createAction(
  '[News/Category] Change Category',
  props<{ category: string }>()
);

// Load Categories
export const loadCategories = createAction('[News/API] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[News/API] Load Categories Success',
  props<{ categories: NewsCategory[] }>()
);