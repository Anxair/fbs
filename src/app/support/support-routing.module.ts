import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SupportComponent} from './support.component';
import {SupportCallComponent} from './support-call/support-call.component';
import {SupportSendComponent} from './support-send/support-send.component';

const routes: Routes = [{
  path: '', component: SupportComponent,
  children: [
    {path: 'call', component: SupportCallComponent},
    {path: 'send', component: SupportSendComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {
}
