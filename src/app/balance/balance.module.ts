import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BalanceComponent} from './balance.component';
import {BalanceRoutingModule} from './balance-routing.module';


@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    CommonModule,

    BalanceRoutingModule
  ]
})
export class BalanceModule {
}
