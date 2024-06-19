import { Component } from '@angular/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
