import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { NewsService } from '../services/news.service';
import {
  changeCategory,
  loadCategoriesSuccess,
  loadNews,
  loadNewsFailure,
  loadNewsSuccess,
} from './news.actions';

@Injectable()
export class NewsEffects {
  private readonly actions$ = inject(Actions);
  private readonly newsService = inject(NewsService);
  private readonly router = inject(Router);

  readonly loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNews, changeCategory),
      switchMap((action) =>
        this.newsService.getTopHeadlines(action.category).pipe(
          map((response) => loadNewsSuccess({ articles: response.articles })),
          catchError((error: Error) => of(loadNewsFailure({ error: error.message })))
        )
      )
    )
  );

  readonly loadNewsFromRoute$ = createEffect(() =>
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const urlSegments = event.urlAfterRedirects
          .split('/')
          .filter((segment: string) => segment);
        const category = urlSegments[0] || 'general';
        return category === '' ? 'general' : category;
      }),
      map((category) => loadNews({ category }))
    )
  );

  readonly loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const categories = [
          { id: '1', name: 'General', value: '' },
          { id: '2', name: 'Business', value: 'business' },
          { id: '3', name: 'Technology', value: 'technology' },
          { id: '4', name: 'Science', value: 'science' },
          { id: '5', name: 'Sports', value: 'sports' },
          { id: '6', name: 'Entertainment', value: 'entertainment' },
          { id: '7', name: 'Health', value: 'health' },
        ];
        return loadCategoriesSuccess({ categories });
      })
    )
  );
}
