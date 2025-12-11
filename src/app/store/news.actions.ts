import { createAction, props } from '@ngrx/store';
import { NewsArticle, NewsCategory } from '../models/news.model';

// Load News
export const loadNews = createAction('[News] Load News', props<{ category: string }>());

export const loadNewsSuccess = createAction(
  '[News] Load News Success',
  props<{ articles: NewsArticle[] }>()
);

export const loadNewsFailure = createAction('[News] Load News Failure', props<{ error: any }>());

// Change Category
export const changeCategory = createAction('[News] Change Category', props<{ category: string }>());

// Load Categories
export const loadCategories = createAction('[News] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[News] Load Categories Success',
  props<{ categories: NewsCategory[] }>()
);
