import { Component } from '@angular/core';
import { Link } from './core/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  navLinks: Link[] = [
    {
      label: 'Welcome',
      link: '',
      index: 0
    },
    {
      label: 'Création client',
      link: 'client-form',
      index: 1
    },
    {
      label: 'Catalogue',
      link: 'display-catalog',
      index: 2
    }
  ];
}
