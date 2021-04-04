import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OptionsComponent} from './options.component';
import {GeneralOptionComponent} from './general-option/general-option.component';
import {AdditionalOptionComponent} from './additional-option/additional-option.component';

const routes: Routes = [{
  path: '', component: OptionsComponent,
  children: [{
    path: 'general', component: GeneralOptionComponent
  },
    {
      path: 'additional', component: AdditionalOptionComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsRoutingModule {
}
