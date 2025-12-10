import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/news.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.newsApiUrl;
  private apiKey = environment.newsApiKey;

  constructor(private http: HttpClient) {}

  getTopHeadlines(category: string = 'general'): Observable<NewsResponse> {
    const params = new HttpParams()
      .set('country', 'us')
      .set('category', category)
      .set('apiKey', this.apiKey);

    return this.http.get<NewsResponse>(`${this.apiUrl}/top-headlines`, { params });
  }

  searchNews(query: string): Observable<NewsResponse> {
    const params = new HttpParams()
      .set('q', query)
      .set('language', 'en')
      .set('sortBy', 'publishedAt')
      .set('apiKey', this.apiKey);

    return this.http.get<NewsResponse>(`${this.apiUrl}/everything`, { params });
  }
}
