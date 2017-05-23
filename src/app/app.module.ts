import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HomeRootModule } from './home-root/home-root.module';
import { BsDropdownModule, AlertModule, ModalModule } from 'ngx-bootstrap';
import { StationBrowsingComponent } from './station/station-browsing/station-browsing.component';
import { MemberBrowsingComponent } from './member/member-browsing/member-browsing.component';
import { AttendanceRecordComponent } from './member/attendance-record/attendance-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRootComponent,
    DashboardComponent,
    LoginComponent,
    StationBrowsingComponent,
    MemberBrowsingComponent,
    AttendanceRecordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //bootstrap
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),

    // app
    HomeRootModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
