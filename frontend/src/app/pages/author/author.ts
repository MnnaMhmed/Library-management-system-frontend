import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  standalone: true,   // أو false لو هتسجل في AppModule
  templateUrl: './author.html',
  styleUrls: ['./author.css']
})
export class AuthorComponent {}
