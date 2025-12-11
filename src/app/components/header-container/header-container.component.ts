import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeCategory } from '../../store/news.actions';
import { selectSelectedCategory } from '../../store/news.selectors';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header
      [selectedCategory]="selectedCategory$ | async"
      (categoryChange)="onCategoryChange($event)"
    ></app-header>
  `,
})
export class HeaderContainerComponent {
  selectedCategory$;

  constructor(private store: Store, private router: Router) {
    this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }

  onCategoryChange(category: string): void {
    this.router.navigate(['/', category]);
    this.store.dispatch(changeCategory({ category }));
  }
}
