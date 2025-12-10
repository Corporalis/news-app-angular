import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { NewsCategory } from '../../models/news.model';
import { changeCategory } from '../../store/news.actions';
import { selectSelectedCategory } from '../../store/news.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedCategory$;

  categories: NewsCategory[] = [
    { id: '1', name: 'General', value: 'general' },
    { id: '2', name: 'Business', value: 'business' },
    { id: '3', name: 'Technology', value: 'technology' },
    { id: '4', name: 'Science', value: 'science' },
    { id: '5', name: 'Sports', value: 'sports' },
    { id: '6', name: 'Entertainment', value: 'entertainment' },
    { id: '7', name: 'Health', value: 'health' }
  ];

  constructor(private store: Store) {
    this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }

  onCategoryChange(category: string): void {
    this.store.dispatch(changeCategory({ category }));
  }
}
