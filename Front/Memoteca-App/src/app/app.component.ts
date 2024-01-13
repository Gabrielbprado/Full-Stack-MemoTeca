import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThoughtsCreatedComponent } from './components/thoughts/thoughts-created/thoughts-created.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,ThoughtsCreatedComponent,ListThoughtsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Memoteca-App';
}
