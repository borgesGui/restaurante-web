import { Component, OnInit } from '@angular/core';

import { Restaurante } from '../../model/restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'pesquisar-restaurante-component',
  templateUrl: './pesquisar-restaurante.component.html',
  styleUrls: ['./pesquisar-restaurante.component.css']
})
export class PesquisarRestauranteComponent implements OnInit {

  titulo: string = "Restaurantes";

  errorMessage: string = null;
  restaurantes: Restaurante[];

  constructor(private _restauranteService: RestauranteService) {
  }

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this._restauranteService.getRestaurantes()
      .subscribe(
      restaurantes => this.restaurantes = restaurantes,
      error => this.errorMessage = <any>error);
  }

  getRestaurantesByNome(filtro: string) {
    this._restauranteService.getRestaurantesByNome(filtro)
      .subscribe(
      restaurantes => this.restaurantes = restaurantes,
      error => this.errorMessage = <any>error);
  }

  pesquisar(filtro: string) {
    if (filtro == null || filtro == '') {
      this.getRestaurantes();
    } else {
      this.getRestaurantesByNome(filtro);
    }
  }

  excluir(restauranteId: number) {
    this._restauranteService.excluir(restauranteId)
      .subscribe(
      restaurantes => this.getRestaurantes(),
      error => this.errorMessage = <any>error);
  }

  hasRestaurante(): boolean {
    return (this.restaurantes != null && this.restaurantes.length > 0);
  }

  hasNotRestaurante(): boolean {
    return !this.hasRestaurante();
  }
}