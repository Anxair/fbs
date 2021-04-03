import {MainComponent} from './main.component';
import {HeaderComponent} from './header/header.component';
import {NavigationPanelComponent} from './navigation-panel/navigation-panel.component';

import {UserMenuComponent} from './user-menu/user-menu.component';
import {NgbDropdownModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavigationPanelComponent,
    UserMenuComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule
  ]
})
export class MainModule {
}
