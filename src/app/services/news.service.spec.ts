import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { environment } from '../../environments/environment';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService],
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify no outstanding HTTP requests
    httpMock.verify();
  });

  describe('Service Initialization', () => {
    it('should be created successfully', () => {
      // Assert
      expect(service).toBeDefined();
    });
  });

  describe('Top Headlines API', () => {
    it('should fetch top headlines for specific category', () => {
      // Arrange
      const mockResponse = {
        status: 'ok',
        totalResults: 2,
        articles: [
          {
            source: { id: '1', name: 'Source 1' },
            author: 'Author 1',
            title: 'Title 1',
            description: 'Description 1',
            url: 'https://example.com/1',
            urlToImage: 'https://example.com/image1.jpg',
            publishedAt: '2025-01-01T00:00:00Z',
            content: 'Content 1',
          },
        ],
      };

      // Act
      service.getTopHeadlines('technology').subscribe((response) => {
        // Assert
        expect(response.articles.length).toBe(1);
        expect(response.articles[0].title).toBe('Title 1');
      });

      const req = httpMock.expectOne((request) => {
        return request.url.includes('/top-headlines');
      });

      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('category')).toBe('technology');
      expect(req.request.params.get('country')).toBe('us');
      expect(req.request.params.get('apiKey')).toBe(environment.newsApiKey);

      req.flush(mockResponse);
    });

    it('should use general category as default when not specified', () => {
      // Arrange
      const mockResponse = {
        status: 'ok',
        totalResults: 0,
        articles: [],
      };

      // Act
      service.getTopHeadlines().subscribe();

      const req = httpMock.expectOne((request) => {
        return request.url.includes('/top-headlines');
      });

      // Assert
      expect(req.request.params.get('category')).toBe('general');
      req.flush(mockResponse);
    });
  });

  describe('Search News API', () => {
    it('should search news articles by query', () => {
      // Arrange
      const mockResponse = {
        status: 'ok',
        totalResults: 1,
        articles: [
          {
            source: { id: '1', name: 'Source 1' },
            author: 'Author 1',
            title: 'Search Result',
            description: 'Description 1',
            url: 'https://example.com/1',
            urlToImage: 'https://example.com/image1.jpg',
            publishedAt: '2025-01-01T00:00:00Z',
            content: 'Content 1',
          },
        ],
      };

      // Act
      service.searchNews('angular').subscribe((response) => {
        // Assert
        expect(response.articles.length).toBe(1);
        expect(response.articles[0].title).toBe('Search Result');
      });

      const req = httpMock.expectOne((request) => {
        return request.url.includes('/everything');
      });

      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('q')).toBe('angular');
      expect(req.request.params.get('language')).toBe('en');
      expect(req.request.params.get('sortBy')).toBe('publishedAt');
      expect(req.request.params.get('apiKey')).toBe(environment.newsApiKey);

      req.flush(mockResponse);
    });
  });

  describe('Error Handling', () => {
    it('should handle HTTP errors gracefully', () => {
      // Act
      service.getTopHeadlines('technology').subscribe({
        next: () => {
          throw new Error('should have failed');
        },
        error: (error) => {
          // Assert
          expect(error).toBeDefined();
        },
      });

      const req = httpMock.expectOne((request) => {
        return request.url.includes('/top-headlines');
      });

      // Simulate server error
      req.flush('Error', { status: 500, statusText: 'Server Error' });
    });
  });
});
