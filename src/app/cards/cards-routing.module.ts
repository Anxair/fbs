import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from './cards.component';
import {CardsActiveComponent} from './cards-active/cards-active.component';
import {CardsArchivedComponent} from './cards-archived/cards-archived.component';

const routes: Routes = [{
  path: '', component: CardsComponent,
  children: [
    {
      path: 'active', component: CardsActiveComponent
    },
    {
      path: 'archived', component: CardsArchivedComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsRoutingModule {
}
