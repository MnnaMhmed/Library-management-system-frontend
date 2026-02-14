import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { SliderComponent } from './components/slider/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,      // علشان يشتغل نظام الـ Routing
    FooterComponent,   // الكومبوننت بتاع الفوتر
    SliderComponent    // الكومبوننت بتاع السلايدر
  ],
  template: `
    <!-- Slider Section -->
    <app-slider></app-slider>

    <!-- Main Routed Pages -->
    <router-outlet></router-outlet>

    <!-- Footer Section -->
    <app-footer></app-footer>
  `
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log(' AppComponent initialized successfully.');
  }
}
