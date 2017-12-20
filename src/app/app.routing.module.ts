import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ROTAS } from './rotas-util/rotas.enum';

const appRoutes: Routes = [
  { path: ROTAS.VAZIO, component: HomeComponent },
  { path: ROTAS.HOME, component: HomeComponent },
  { path: ROTAS.PESQUISAR_RESTAURANTE, loadChildren: 'app/restaurante/restaurante.module#RestauranteModule' },
  { path: ROTAS.PESQUISAR_PRATO, loadChildren: 'app/prato/prato.module#PratoModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
