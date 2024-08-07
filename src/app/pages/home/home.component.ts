import { Component } from '@angular/core';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from "./components/contact/contact.component";
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
