import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentPage: string;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.currentPage = this.titleService.getTitle();
  }
}
