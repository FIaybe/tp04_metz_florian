import { Component } from '@angular/core';
import { Link } from 'src/app/core/Link';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  navLinks: Link[];
  constructor() {
    this.navLinks = [
      {
        label: 'Création client',
        link: 'form',
        index: 0
      },
      {
        label: 'Affichage du client',
        link: 'display',
        index: 1
      }
    ];
  }


}
