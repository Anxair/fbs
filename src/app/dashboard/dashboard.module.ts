import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { CurrentComponent } from './current/current.component';
import { LastYearComponent } from './last-year/last-year.component';
import {AllSizeWinDirective} from '../directives/all-size-win.directive';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentComponent,
    LastYearComponent,
    AllSizeWinDirective
  ],
  imports: [
    CommonModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
