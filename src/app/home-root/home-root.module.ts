import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  SidebarComponent, 
  TopnavComponent,
],
  exports: [SidebarComponent, 
  TopnavComponent
  ]
})
export class HomeRootModule { }
