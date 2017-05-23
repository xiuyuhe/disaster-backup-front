import { HomeRootComponent } from './home-root.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StationBrowsingComponent } from '../station/station-browsing/station-browsing.component';
import { MemberBrowsingComponent } from '../member/member-browsing/member-browsing.component';
import { AttendanceRecordComponent } from '../member/attendance-record/attendance-record.component';
export const HomeRootRoutes: Routes = [
  {
    path: '',
    component: HomeRootComponent,
    //canActivate: [HomeRootComponentGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      {path:'stationBrowsing',component:StationBrowsingComponent},
      {path:'memberBrowsing',component:MemberBrowsingComponent},
      {path:'attendanceRecord',component:AttendanceRecordComponent}
       
    ]
  }
];
