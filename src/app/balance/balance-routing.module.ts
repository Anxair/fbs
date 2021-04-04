import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BalanceComponent} from './balance.component';
import {BalanceActiveComponent} from './balance-active/balance-active.component';
import {BalanceArchivedComponent} from './balance-archived/balance-archived.component';

const routes: Routes = [{
  path: '', component: BalanceComponent,
  children: [
    {
      path: 'active', component: BalanceActiveComponent
    },
    {
      path: 'archived', component: BalanceArchivedComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule {

}
