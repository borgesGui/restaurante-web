import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManterRestauranteComponent } from '../restaurante/manter-restaurante/manter-restaurante.component';
import { PesquisarRestauranteComponent } from '../restaurante/pesquisar-restaurante/pesquisar-restaurante.component';
import { ROTAS } from '../rotas-util/rotas.enum';


const appRoutes: Routes = [
  { path: ROTAS.VAZIO, component: PesquisarRestauranteComponent },
  { path: ROTAS.CADASTRAR_RESTAURANTE, component: ManterRestauranteComponent },
  { path: ROTAS.EDITAR_RESTAURANTE, component: ManterRestauranteComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RestauranteRotasModule { }
