import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderContainerComponent } from './components/header-container/header-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderContainerComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
