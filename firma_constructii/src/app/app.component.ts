import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PaginaPrincipalaComponent } from './pagina-principala/pagina-principala.component';//am importat componenta
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PaginaPrincipalaComponent],//aici se adauga componenta importata
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Profa!';
}
