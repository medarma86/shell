import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
})
export class App {
  showHostShell = true; // show host content
  showRouterOutlet = true; // show router outlet for remote/host pages

  // Define remote route prefixes
  private remoteRoutes = ['/mfe', '/quote'];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Hide host shell if current URL starts with any remote route
        this.showHostShell = !this.remoteRoutes.some(path => event.url.startsWith(path));
        // Optionally, hide router outlet if URL is outside all routes (optional)
        this.showRouterOutlet = true;
      });
  }
}
