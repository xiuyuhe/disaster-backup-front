import { HomeRootComponent } from './home-root.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
export const HomeRootRoutes: Routes = [
  {
    path: '',
    component: HomeRootComponent,
    //canActivate: [HomeRootComponentGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];
