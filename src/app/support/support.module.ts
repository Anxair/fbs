import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupportComponent} from './support.component';
import {SupportRoutingModule} from './support-routing.module';
import { SupportCallComponent } from './support-call/support-call.component';
import { SupportSendComponent } from './support-send/support-send.component';


@NgModule({
  declarations: [
    SupportComponent,
    SupportCallComponent,
    SupportSendComponent
  ],
  imports: [
    CommonModule,

    SupportRoutingModule
  ]
})
export class SupportModule {
}
