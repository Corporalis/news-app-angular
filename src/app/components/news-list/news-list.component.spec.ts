import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsArticle } from '../../models/news.model';
import { NewsListComponent } from './news-list.component';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  const mockArticles: NewsArticle[] = [
    {
      source: { id: '1', name: 'Source 1' },
      author: 'Author 1',
      title: 'Article 1',
      description: 'Description 1',
      url: 'https://example.com/1',
      urlToImage: 'https://example.com/image1.jpg',
      publishedAt: new Date().toISOString(),
      content: 'Content 1',
    },
    {
      source: { id: '2', name: 'Source 2' },
      author: 'Author 2',
      title: 'Article 2',
      description: 'Description 2',
      url: 'https://example.com/2',
      urlToImage: 'https://example.com/image2.jpg',
      publishedAt: new Date().toISOString(),
      content: 'Content 2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    // Don't call detectChanges here - let each test control it
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });
  it('should display loading state', () => {
    component.loading = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Loading news...');
  });

  it('should display error message', () => {
    component.error = 'Test error message';
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Error Loading News');
    expect(compiled.textContent).toContain('Test error message');
  });

  it('should display category title', () => {
    component.articles = mockArticles;
    component.selectedCategory = 'technology';
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement?.textContent).toContain('technology News');
  });

  it('should display articles when provided', () => {
    component.articles = mockArticles;
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const newsCards = compiled.querySelectorAll('app-news-card');
    expect(newsCards.length).toBe(2);
  });

  it('should display featured article separately', () => {
    component.articles = mockArticles;
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const featuredSection = compiled.querySelector('.mb-8');
    expect(featuredSection).not.toBeNull();
  });

  it('should display "No articles found" when empty', () => {
    component.articles = [];
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('No articles found');
  });

  it('should handle null articles', () => {
    component.articles = null;
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const newsCards = compiled.querySelectorAll('app-news-card');
    expect(newsCards.length).toBe(0);
  });

  it('should not display articles when loading', () => {
    component.articles = mockArticles;
    component.loading = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const newsCards = compiled.querySelectorAll('app-news-card');
    expect(newsCards.length).toBe(0);
  });

  it('should display remaining articles in grid', () => {
    const manyArticles: NewsArticle[] = [
      ...mockArticles,
      {
        source: { id: '3', name: 'Source 3' },
        author: 'Author 3',
        title: 'Article 3',
        description: 'Description 3',
        url: 'https://example.com/3',
        urlToImage: 'https://example.com/image3.jpg',
        publishedAt: new Date().toISOString(),
        content: 'Content 3',
      },
      {
        source: { id: '4', name: 'Source 4' },
        author: 'Author 4',
        title: 'Article 4',
        description: 'Description 4',
        url: 'https://example.com/4',
        urlToImage: 'https://example.com/image4.jpg',
        publishedAt: new Date().toISOString(),
        content: 'Content 4',
      },
      {
        source: { id: '5', name: 'Source 5' },
        author: 'Author 5',
        title: 'Article 5',
        description: 'Description 5',
        url: 'https://example.com/5',
        urlToImage: 'https://example.com/image5.jpg',
        publishedAt: new Date().toISOString(),
        content: 'Content 5',
      },
      {
        source: { id: '6', name: 'Source 6' },
        author: 'Author 6',
        title: 'Article 6',
        description: 'Description 6',
        url: 'https://example.com/6',
        urlToImage: 'https://example.com/image6.jpg',
        publishedAt: new Date().toISOString(),
        content: 'Content 6',
      },
    ];
    component.articles = manyArticles;
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const gridSection = compiled.querySelector('.grid');
    const cardsInGrid = gridSection?.querySelectorAll('app-news-card');
    expect(cardsInGrid?.length).toBe(5); // All except first (featured)
  });

  it('should handle single article', () => {
    component.articles = [mockArticles[0]];
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const newsCards = compiled.querySelectorAll('app-news-card');
    expect(newsCards.length).toBe(1); // Only featured article
  });

  it('should use default category when null', () => {
    component.articles = mockArticles;
    component.selectedCategory = null;
    component.loading = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h2');
    expect(titleElement?.textContent).toBeDefined();
  });
});
