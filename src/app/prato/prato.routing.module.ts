import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManterPratoComponent } from '../prato/manter-prato/manter-prato.component';
import { PesquisarPratoComponent } from '../prato/pesquisar-prato/pesquisar-prato.component';
import { ROTAS } from '../rotas-util/rotas.enum';


const appRoutes: Routes = [
  { path: ROTAS.VAZIO, component: PesquisarPratoComponent },
  { path: ROTAS.CADASTRAR_PRATO, component: ManterPratoComponent },
  { path: ROTAS.EDITAR_PRATO, component: ManterPratoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PratoRotasModule { }
