import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ActionsComponent } from './components/actions/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
