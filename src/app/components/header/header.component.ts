import { Component } from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ActionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
