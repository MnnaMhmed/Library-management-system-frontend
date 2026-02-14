import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,   // أو false لو هتسجل في AppModule
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {}
