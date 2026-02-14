import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
