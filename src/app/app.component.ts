import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCssClass = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const pageName = event.url.split('/').pop();
      if (pageName === 'login') {
        this.componentCssClass = 'background-image-1';
      } else if (pageName === 'register') {
        this.componentCssClass = 'background-image-2';
      } else if (pageName === 'profile') {
        this.componentCssClass = 'background-image-5';
      } else if (pageName === 'cart') {
        this.componentCssClass = 'background-image-10';
      }
      else {
        this.componentCssClass = 'background-image-4';
      }
    });
  }
}
