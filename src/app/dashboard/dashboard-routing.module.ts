import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {CurrentComponent} from './current/current.component';
import {LastYearComponent} from './last-year/last-year.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{
    path: 'current', component: CurrentComponent
  },
    {
      path: 'past', component: LastYearComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
