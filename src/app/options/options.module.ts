import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OptionsComponent} from './options.component';
import {OptionsRoutingModule} from './options-routing.module';
import { GeneralOptionComponent } from './general-option/general-option.component';
import { AdditionalOptionComponent } from './additional-option/additional-option.component';


@NgModule({
  declarations: [
    OptionsComponent,
    GeneralOptionComponent,
    AdditionalOptionComponent
  ],
  imports: [
    CommonModule,

    OptionsRoutingModule
  ]
})
export class OptionsModule {
}
