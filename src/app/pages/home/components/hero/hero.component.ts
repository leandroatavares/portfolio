import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AnalyticsService } from '../../../../services/analytics.service';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  avatar = '/assets/images/leandroatavares.jpg';

  constructor(private analyticsService: AnalyticsService) { }

  generateAnalytics(social: string) {
    console.log(`test`)
    this.analyticsService.trackEvent('social_access', `click in ${social}`, 'SOCIAL_CLICK')
  }
}
