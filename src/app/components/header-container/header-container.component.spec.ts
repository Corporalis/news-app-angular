import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { newsReducer } from '../../store/news.reducer';
import { HeaderContainerComponent } from './header-container.component';

describe('HeaderContainerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderContainerComponent],
      providers: [provideStore({ news: newsReducer }), provideRouter([])],
    }).compileComponents();
  });

  describe('Component Initialization', () => {
    it('should create the container component', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(HeaderContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component).toBeDefined();
    });
  });

  describe('Store Integration', () => {
    it('should have categories$ observable connected to store', () => {
      // Arrange & Act
      const fixture = TestBed.createComponent(HeaderContainerComponent);
      const component = fixture.componentInstance;

      // Assert
      expect(component.categories$).toBeDefined();
    });
  });

  describe('Template Rendering', () => {
    it('should render the presentation header component', () => {
      // Arrange
      const fixture = TestBed.createComponent(HeaderContainerComponent);

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const headerElement = compiled.querySelector('app-header');

      // Assert
      expect(headerElement).not.toBeNull();
    });
  });
});
