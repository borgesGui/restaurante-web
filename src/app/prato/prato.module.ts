import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PratoService } from './prato.service';
import { ManterPratoComponent } from './manter-prato/manter-prato.component';
import { PesquisarPratoComponent } from './pesquisar-prato/pesquisar-prato.component';
import { PratoRotasModule } from './prato.routing.module';
import { RestauranteService } from '../restaurante/restaurante.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PratoRotasModule
  ],
  declarations: [
    PesquisarPratoComponent,
    ManterPratoComponent
  ],
  exports: [
    PesquisarPratoComponent,
    ManterPratoComponent
  ],
  providers: [
    RestauranteService,
    PratoService
  ]
})
export class PratoModule { }
