import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      // Assert
      expect(component).toBeDefined();
    });
  });

  describe('NewsAPI Attribution', () => {
    it('should display NewsAPI.org credit', () => {
      // Arrange & Act
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.textContent).toContain('NewsAPI.org');
    });

    it('should include link to NewsAPI website', () => {
      // Arrange & Act
      const compiled = fixture.nativeElement as HTMLElement;
      const link = compiled.querySelector('a[href*="newsapi.org"]');

      // Assert
      expect(link).not.toBeNull();
      expect(link?.getAttribute('href')).toContain('newsapi');
    });

    it('should open NewsAPI link in new tab', () => {
      // Arrange & Act
      const compiled = fixture.nativeElement as HTMLElement;
      const link = compiled.querySelector('a[href*="newsapi.org"]');

      // Assert
      expect(link?.getAttribute('target')).toBe('_blank');
    });
  });

  describe('Copyright Information', () => {
    it('should display current year in copyright', () => {
      // Arrange
      const compiled = fixture.nativeElement as HTMLElement;
      const currentYear = new Date().getFullYear();

      // Act & Assert
      expect(compiled.textContent).toContain(currentYear.toString());
    });
  });

  describe('Styling', () => {
    it('should have proper footer styling classes', () => {
      // Arrange & Act
      const compiled = fixture.nativeElement as HTMLElement;
      const footer = compiled.querySelector('footer');

      // Assert
      expect(footer).not.toBeNull();
      expect(footer?.classList.contains('bg-black')).toBe(true);
    });
  });
});
