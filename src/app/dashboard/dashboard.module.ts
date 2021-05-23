import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CurrentComponent} from './current/current.component';
import {LastYearComponent} from './last-year/last-year.component';
import {AllSizeWinDirective} from '../directives/all-size-win.directive';
import {SearchDirective} from '../directives/search.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CurrentComponent,
    LastYearComponent,
    AllSizeWinDirective,
    SearchDirective
  ],
  imports: [
    CommonModule,

    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
