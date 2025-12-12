import { TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { NewsListContainerComponent } from './news-list-container.component';
import { newsReducer } from '../../store/news.reducer';

describe('NewsListContainerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsListContainerComponent],
      providers: [provideStore({ news: newsReducer })],
    }).compileComponents();
  });

  describe('Component Initialization', () => {
    it('should create the container component', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(NewsListContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component).toBeDefined();
    });
  });

  describe('Store Integration', () => {
    it('should have articles$ observable connected to store', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(NewsListContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component.articles$).toBeDefined();
    });

    it('should have loading$ observable connected to store', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(NewsListContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component.loading$).toBeDefined();
    });

    it('should have error$ observable connected to store', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(NewsListContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component.error$).toBeDefined();
    });

    it('should have selectedCategory$ observable connected to store', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(NewsListContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component.selectedCategory$).toBeDefined();
    });
  });

  describe('Template Rendering', () => {
    it('should render the presentation news-list component', () => {
      // Arrange
      const fixture = TestBed.createComponent(NewsListContainerComponent);
      
      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const newsListElement = compiled.querySelector('app-news-list');

      // Assert
      expect(newsListElement).not.toBeNull();
    });
  });
});
