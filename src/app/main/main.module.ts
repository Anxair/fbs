import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import {RouterModule} from '@angular/router';
import { UserMenuComponent } from './user-menu/user-menu.component';



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
    RouterModule
  ]
})
export class MainModule { }
