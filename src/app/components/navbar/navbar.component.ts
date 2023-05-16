import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // Mocked while only having "one screen"
  currentPage: string = 'Clientes';

  constructor() {}

  ngOnInit(): void {}
}
