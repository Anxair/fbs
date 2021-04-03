import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    },
    {
      path: 'cards',
      loadChildren: () => import('./cards/cards.module')
        .then(m => m.CardsModule)
    },
    {
      path: 'balance',
      loadChildren: () => import('./balance/balance.module')
        .then(m => m.BalanceModule)
    },
    {
      path: 'options',
      loadChildren: () => import('./options/options.module')
        .then(m => m.OptionsModule)
    },
    {
      path: 'support',
      loadChildren: () => import('./support/support.module')
        .then(m => m.SupportModule)
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
