import { Routes } from '@angular/router';
import { NewsListContainerComponent } from './components/news-list-container/news-list-container.component';

export const routes: Routes = [
  { path: '', component: NewsListContainerComponent, data: { category: 'general' } },
  { path: 'business', component: NewsListContainerComponent },
  { path: 'entertainment', component: NewsListContainerComponent },
  { path: 'health', component: NewsListContainerComponent },
  { path: 'science', component: NewsListContainerComponent },
  { path: 'sports', component: NewsListContainerComponent },
  { path: 'technology', component: NewsListContainerComponent },
  { path: '**', redirectTo: '' },
];
