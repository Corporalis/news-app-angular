import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-black border-t border-bbc-border mt-12">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-bbc-text-secondary text-sm">
            <p>Powered by <a href="https://newsapi.org" target="_blank" class="text-bbc-red hover:underline">NewsAPI.org</a></p>
          </div>
          <div class="text-bbc-text-secondary text-sm">
            <p>Built with Angular 18 + NGRX + Tailwind CSS</p>
          </div>
          <div class="text-bbc-text-secondary text-xs">
            <p>&copy; {{ currentYear }} BBC News App Clone</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
