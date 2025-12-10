import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as NewsActions from './news.actions';
import { NewsService } from '../services/news.service';

@Injectable()
export class NewsEffects {
  private actions$ = inject(Actions);
  private newsService = inject(NewsService);

  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.loadNews, NewsActions.changeCategory),
      switchMap((action) =>
        this.newsService.getTopHeadlines(action.category).pipe(
          map((response) =>
            NewsActions.loadNewsSuccess({ articles: response.articles })
          ),
          catchError((error) =>
            of(NewsActions.loadNewsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
