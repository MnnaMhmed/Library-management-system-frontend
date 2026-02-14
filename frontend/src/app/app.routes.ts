import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AuthorComponent } from './pages/author/author';
import { CategoriesComponent } from './pages/categories/categories';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { NotificationComponent } from './pages/notification/notification';
import { ProfileComponent } from './pages/profile/profile';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './pages/notification/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.startConnection();
  }
}



export const routes: Routes = [
  { path: '', component: HomeComponent },       // الصفحة الرئيسية
  { path: 'author', component: AuthorComponent },
  { path: 'categories', component: CategoriesComponent },
 { path: 'dashboard', component: DashboardComponent },
  { path: 'notification', component: NotificationComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // الصفحة الافتراضية
  { path: '**', redirectTo: '/dashboard' }, // لأي route غير معروف
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
