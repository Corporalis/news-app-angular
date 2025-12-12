import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { newsReducer } from './store/news.reducer';
import { NewsEffects } from './store/news.effects';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideStore({ news: newsReducer }),
        provideEffects([NewsEffects]),
        provideRouter([]),
        provideHttpClient(),
      ],
    }).compileComponents();
  });

  describe('Component Initialization', () => {
    it('should create the app component', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(App);
      const app = fixture.componentInstance;

      // Assert
      expect(app).toBeDefined();
    });
  });

  describe('Template Rendering', () => {
    it('should render the header container', async () => {
      // Arrange
      const fixture = TestBed.createComponent(App);
      
      // Act
      await fixture.whenStable();
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.querySelector('app-header-container')).not.toBeNull();
    });
  });
});
