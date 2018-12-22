import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isBlack = true;

  constructor(
    private router: Router
  ) {
    router.events.subscribe((data: any) => {
      if (this.router.url == '/' || this.router.url == '/home' || this.router.url == '/about') {
        this.isBlack = true;
      } else {
        this.isBlack = false;
      }
    })
    console.log(this.router.url)
  }

  ngOnInit() {
  }


}
