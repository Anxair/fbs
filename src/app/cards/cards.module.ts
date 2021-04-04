import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardsRoutingModule} from './cards-routing.module';
import { CardsActiveComponent } from './cards-active/cards-active.component';
import { CardsArchivedComponent } from './cards-archived/cards-archived.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardsActiveComponent,
    CardsArchivedComponent
  ],
  imports: [
    CommonModule,

    CardsRoutingModule
  ]
})
export class CardsModule {
}
