import {
  selectNewsState,
  selectAllArticles,
  selectCategories,
  selectSelectedCategory,
  selectLoading,
  selectError,
} from './news.selectors';
import { NewsState } from './news.reducer';

describe('News Selectors', () => {
  const mockState: NewsState = {
    articles: [
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
    ],
    categories: [
      { id: '1', name: 'General', value: '' },
      { id: '2', name: 'Business', value: 'business' },
    ],
    selectedCategory: 'technology',
    loading: false,
    error: null,
  };

  const rootState = { news: mockState };

  describe('selectNewsState', () => {
    it('should select the entire news feature state', () => {
      // Act
      const result = selectNewsState(rootState);
      
      // Assert
      expect(result).toEqual(mockState);
    });
  });

  describe('selectAllArticles', () => {
    it('should select all news articles from state', () => {
      // Act
      const result = selectAllArticles(rootState);
      
      // Assert
      expect(result).toEqual(mockState.articles);
      expect(result.length).toBe(1);
      expect(result[0].title).toBe('Title');
    });

    it('should return empty array when no articles', () => {
      // Arrange
      const emptyState = { news: { ...mockState, articles: [] } };
      
      // Act
      const result = selectAllArticles(emptyState);
      
      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('selectCategories', () => {
    it('should select all news categories', () => {
      // Act
      const result = selectCategories(rootState);
      
      // Assert
      expect(result).toEqual(mockState.categories);
      expect(result.length).toBe(2);
    });

    it('should return empty array when no categories', () => {
      // Arrange
      const emptyState = { news: { ...mockState, categories: [] } };
      
      // Act
      const result = selectCategories(emptyState);
      
      // Assert
      expect(result).toEqual([]);
    });
  });

  describe('selectSelectedCategory', () => {
    it('should select the currently active category', () => {
      // Act
      const result = selectSelectedCategory(rootState);
      
      // Assert
      expect(result).toBe('technology');
    });
  });

  describe('selectLoading', () => {
    it('should select loading state as false when not loading', () => {
      // Act
      const result = selectLoading(rootState);
      
      // Assert
      expect(result).toBe(false);
    });

    it('should select loading state as true when loading', () => {
      // Arrange
      const loadingState = { news: { ...mockState, loading: true } };
      
      // Act
      const result = selectLoading(loadingState);
      
      // Assert
      expect(result).toBe(true);
    });
  });

  describe('selectError', () => {
    it('should return null when no error exists', () => {
      // Act
      const result = selectError(rootState);
      
      // Assert
      expect(result).toBe(null);
    });

    it('should return error message when error exists', () => {
      // Arrange
      const errorState = { news: { ...mockState, error: 'Test error' } };
      
      // Act
      const result = selectError(errorState);
      
      // Assert
      expect(result).toBe('Test error');
    });
  });
});
