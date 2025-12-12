import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NewsCategory } from '../../models/news.model';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const mockCategories: NewsCategory[] = [
    { id: '1', name: 'General', value: '' },
    { id: '2', name: 'Business', value: 'business' },
    { id: '3', name: 'Technology', value: 'technology' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render NEWSDIT brand', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brandElement = compiled.querySelector('h1');
    expect(brandElement?.textContent).toContain('NEWSDIT');
  });

  it('should display categories when provided', async () => {
    component.categories = mockCategories;
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav).not.toBeNull();
  });

  it('should accept category input', async () => {
    component.categories = mockCategories;
    expect(component.categories.length).toBe(3);
    expect(component.categories[0].name).toBe('General');
  });

  it('should handle null categories', () => {
    component.categories = null;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const categoryLinks = compiled.querySelectorAll('nav a');
    expect(categoryLinks.length).toBe(0);
  });

  it('should handle empty categories array', () => {
    component.categories = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const categoryLinks = compiled.querySelectorAll('nav a');
    expect(categoryLinks.length).toBe(0);
  });

  it('should render navigation with categories', async () => {
    component.categories = mockCategories;
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav ul');
    expect(nav).toBeTruthy();
  });
});
