import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BalanceComponent} from './balance.component';
import {BalanceRoutingModule} from './balance-routing.module';
import {BalanceActiveComponent} from './balance-active/balance-active.component';
import {BalanceArchivedComponent} from './balance-archived/balance-archived.component';


@NgModule({
  declarations: [
    BalanceComponent,
    BalanceActiveComponent,
    BalanceArchivedComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ]
})
export class BalanceModule {
}
