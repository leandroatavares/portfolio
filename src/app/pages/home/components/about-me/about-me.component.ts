import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  yearsOfExperience = new Date().getFullYear() - 2017;
  avatar = '/assets/images/leandroatavares.jpg';
}
