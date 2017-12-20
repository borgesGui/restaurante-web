import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { RestauranteService } from './restaurante.service';
import { ManterRestauranteComponent } from './manter-restaurante/manter-restaurante.component';
import { PesquisarRestauranteComponent } from './pesquisar-restaurante/pesquisar-restaurante.component';
import { RestauranteRotasModule } from './restaurante.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RestauranteRotasModule
  ],
  declarations: [
    ManterRestauranteComponent,
    PesquisarRestauranteComponent
  ],
  providers: [
    RestauranteService
  ],
  exports: [
    ManterRestauranteComponent,
    PesquisarRestauranteComponent
  ]
})
export class RestauranteModule { }
