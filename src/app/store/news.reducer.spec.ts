import { NewsArticle, NewsCategory } from '../models/news.model';
import {
  changeCategory,
  loadCategoriesSuccess,
  loadNews,
  loadNewsFailure,
  loadNewsSuccess,
} from './news.actions';
import { initialState, newsReducer } from './news.reducer';

describe('News Reducer', () => {
  describe('Initial State', () => {
    it('should return the default initial state for unknown action', () => {
      // Arrange
      const action = { type: 'Unknown' };

      // Act
      const state = newsReducer(undefined, action);

      // Assert
      expect(state).toBe(initialState);
      expect(state.loading).toBe(false);
      expect(state.articles).toEqual([]);
      expect(state.error).toBe(null);
    });
  });

  describe('loadNews Action', () => {
    it('should set loading to true and clear previous error', () => {
      // Arrange
      const action = loadNews({ category: 'technology' });

      // Act
      const state = newsReducer(initialState, action);

      // Assert
      expect(state.loading).toBe(true);
      expect(state.error).toBe(null);
    });
  });

  describe('loadNewsSuccess Action', () => {
    it('should populate articles and set loading to false', () => {
      const mockArticles: NewsArticle[] = [
        {
          source: { id: '1', name: 'Source' },
          author: 'Author',
          title: 'Title',
          description: 'Description',
          url: 'https://example.com',
          urlToImage: 'https://example.com/image.jpg',
          publishedAt: '2025-01-01T00:00:00Z',
          content: 'Content',
        },
      ];

      const action = loadNewsSuccess({ articles: mockArticles });
      const state = newsReducer(initialState, action);

      expect(state.articles).toEqual(mockArticles);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(null);
    });
  });

  describe('loadNewsFailure', () => {
    it('should set error and loading to false', () => {
      const action = loadNewsFailure({ error: 'Test error' });
      const state = newsReducer(initialState, action);

      expect(state.error).toBe('Test error');
      expect(state.loading).toBe(false);
    });
  });

  describe('changeCategory', () => {
    it('should update selected category', () => {
      const action = changeCategory({ category: 'business' });
      const state = newsReducer(initialState, action);

      expect(state.selectedCategory).toBe('business');
    });
  });

  describe('loadCategoriesSuccess', () => {
    it('should update categories', () => {
      const mockCategories: NewsCategory[] = [
        { id: '1', name: 'General', value: '' },
        { id: '2', name: 'Business', value: 'business' },
      ];

      const action = loadCategoriesSuccess({ categories: mockCategories });
      const state = newsReducer(initialState, action);

      expect(state.categories).toEqual(mockCategories);
    });
  });

  describe('state immutability', () => {
    it('should not mutate the previous state', () => {
      const action = loadNews({ category: 'technology' });
      const state = newsReducer(initialState, action);

      expect(state).not.toBe(initialState);
      expect(initialState.loading).toBe(false);
      expect(state.loading).toBe(true);
    });
  });
});
