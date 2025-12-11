import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticle } from '../../models/news.model';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  @Input() articles: NewsArticle[] | null = null;
  @Input() loading: boolean | null = false;
  @Input() error: any | null = null;
  @Input() selectedCategory: string | null = 'general';
}
