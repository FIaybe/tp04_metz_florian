import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/core/Link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navLinks: Link[];

  constructor() {

  }

  ngOnInit() {
  }

}
