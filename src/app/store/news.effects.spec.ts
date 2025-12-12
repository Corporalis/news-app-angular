import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { NewsService } from '../services/news.service';
import {
  changeCategory,
  loadCategoriesSuccess,
  loadNews,
  loadNewsFailure,
  loadNewsSuccess,
} from './news.actions';
import { NewsEffects } from './news.effects';

describe('NewsEffects', () => {
  let actions$: Observable<any>;
  let effects: NewsEffects;
  let newsService: any;

  beforeEach(() => {
    const newsServiceMock = {
      getTopHeadlines: vi.fn(),
    };
    const routerMock = {
      events: new Observable(),
    };

    TestBed.configureTestingModule({
      providers: [
        NewsEffects,
        provideMockActions(() => actions$),
        { provide: NewsService, useValue: newsServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    effects = TestBed.inject(NewsEffects);
    newsService = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(effects).toBeDefined();
  });

  describe('loadNews$', () => {
    it('should return loadNewsSuccess action on successful API call', () => {
      const mockResponse = {
        status: 'ok',
        totalResults: 1,
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
      };

      newsService.getTopHeadlines.mockReturnValue(of(mockResponse));
      actions$ = of(loadNews({ category: 'technology' }));

      effects.loadNews$.subscribe((action) => {
        expect(action).toEqual(loadNewsSuccess({ articles: mockResponse.articles }));
      });
    });

    it('should return loadNewsFailure action on API error', () => {
      const error = new Error('API Error');
      newsService.getTopHeadlines.mockReturnValue(throwError(() => error));
      actions$ = of(loadNews({ category: 'technology' }));

      effects.loadNews$.subscribe((action) => {
        expect(action).toEqual(loadNewsFailure({ error: 'API Error' }));
      });
    });

    it('should trigger on changeCategory action', () => {
      const mockResponse = {
        status: 'ok',
        totalResults: 0,
        articles: [],
      };

      newsService.getTopHeadlines.mockReturnValue(of(mockResponse));
      actions$ = of(changeCategory({ category: 'business' }));

      effects.loadNews$.subscribe((action) => {
        expect(action).toEqual(loadNewsSuccess({ articles: [] }));
        expect(newsService.getTopHeadlines).toHaveBeenCalledWith('business');
      });
    });
  });

  describe('loadCategories$', () => {
    it('should return loadCategoriesSuccess with predefined categories', () => {
      actions$ = of({ type: ROOT_EFFECTS_INIT });

      effects.loadCategories$.subscribe((action) => {
        expect(action.type).toBe(loadCategoriesSuccess.type);
        expect((action as any).categories.length).toBe(7);
        expect((action as any).categories[0].name).toBe('General');
      });
    });
  });
});
