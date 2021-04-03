import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OptionsComponent} from './options.component';

const routes: Routes = [{path: '', component: OptionsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsRoutingModule {
}
