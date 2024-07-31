import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faAws } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  faAngular = faAngular;
  faAws = faAws;
  project1 = '/assets/images/portfolio_project.png';
}
