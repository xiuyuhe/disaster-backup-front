import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeRootRoutes } from './home-root/home-root.routes';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [UnauthenticatedGuard]
  },
  ...HomeRootRoutes
];
