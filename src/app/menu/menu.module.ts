import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
