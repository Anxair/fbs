import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { CurrentComponent } from './current/current.component';
import { LastYearComponent } from './last-year/last-year.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentComponent,
    LastYearComponent
  ],
  imports: [
    CommonModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
