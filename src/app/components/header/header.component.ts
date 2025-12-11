import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewsCategory } from '../../models/news.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() selectedCategory: string | null = 'general';
  @Output() categoryChange = new EventEmitter<string>();

  categories: NewsCategory[] = [
    { id: '1', name: 'General', value: '' },
    { id: '2', name: 'Business', value: 'business' },
    { id: '3', name: 'Technology', value: 'technology' },
    { id: '4', name: 'Science', value: 'science' },
    { id: '5', name: 'Sports', value: 'sports' },
    { id: '6', name: 'Entertainment', value: 'entertainment' },
    { id: '7', name: 'Health', value: 'health' },
  ];

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category);
  }
}
