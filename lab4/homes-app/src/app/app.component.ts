import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img calss="brand-logo" src="/assets/logo.svg" 
        alt="logo" aria-hidden="true">
      </header>
    </main>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'homes';
}
