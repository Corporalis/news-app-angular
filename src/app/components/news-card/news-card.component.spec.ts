import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsArticle } from '../../models/news.model';
import { NewsCardComponent } from './news-card.component';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  const mockArticle: NewsArticle = {
    source: { id: 'bbc-news', name: 'BBC News' },
    author: 'John Doe',
    title: 'Test Article Title',
    description: 'Test article description',
    url: 'https://example.com/article',
    urlToImage: 'https://example.com/image.jpg',
    publishedAt: new Date().toISOString(),
    content: 'Test content',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
  });

  describe('Component Initialization', () => {
    it('should create the component', () => {
      // Assert
      expect(component).toBeDefined();
    });
  });

  describe('Article Content Display', () => {
    it('should display article title', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const titleElement = compiled.querySelector('h3');

      // Assert
      expect(titleElement).not.toBeNull();
      expect(titleElement?.textContent).toContain('Test Article Title');
    });

    it('should display article description', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const descriptionElement = compiled.querySelector('p');

      // Assert
      expect(descriptionElement).not.toBeNull();
      expect(descriptionElement?.textContent).toContain('Test article description');
    });

    it('should display article source name', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.textContent).toContain('BBC News');
    });
  });

  describe('Author Information', () => {
    it('should display author name when provided', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.textContent).toContain('John Doe');
    });

    it('should handle article without author gracefully', () => {
      // Arrange
      component.article = { ...mockArticle, author: null };

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;

      // Assert
      expect(compiled.textContent).not.toContain('John Doe');
    });
  });

  describe('Image Handling', () => {
    it('should display article image when URL is provided', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const imageElement = compiled.querySelector('img');

      // Assert
      expect(imageElement).not.toBeNull();
      expect(imageElement?.getAttribute('src')).toBe('https://example.com/image.jpg');
    });

    it('should not render image element when URL is null', () => {
      // Arrange
      component.article = { ...mockArticle, urlToImage: null };

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const imageElement = compiled.querySelector('img');

      // Assert
      expect(imageElement).toBeNull();
    });
  });

  describe('Time Display', () => {
    it('should format time correctly for recent articles (hours)', () => {
      // Arrange
      const recentDate = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();

      // Act
      const timeAgo = component.getTimeAgo(recentDate);

      // Assert
      expect(timeAgo).toBe('2 hours ago');
    });

    it('should format time correctly for old articles (days)', () => {
      // Arrange
      const oldDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

      // Act
      const timeAgo = component.getTimeAgo(oldDate);

      // Assert
      expect(timeAgo).toBe('3 days ago');
    });

    it('should format time correctly for very recent articles (minutes)', () => {
      // Arrange
      const veryRecentDate = new Date(Date.now() - 30 * 60 * 1000).toISOString();

      // Act
      const timeAgo = component.getTimeAgo(veryRecentDate);

      // Assert
      expect(timeAgo).toBe('30 minutes ago');
    });
  });

  describe('Article Links', () => {
    it('should link to the correct article URL', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const linkElement = compiled.querySelector('a');

      // Assert
      expect(linkElement).not.toBeNull();
      expect(linkElement?.getAttribute('href')).toBe('https://example.com/article');
    });

    it('should open article link in new tab for better UX', () => {
      // Arrange
      component.article = mockArticle;

      // Act
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const linkElement = compiled.querySelector('a');

      // Assert
      expect(linkElement?.getAttribute('target')).toBe('_blank');
      expect(linkElement?.getAttribute('rel')).toContain('noopener');
    });
  });
});
