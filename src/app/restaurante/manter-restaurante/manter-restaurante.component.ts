import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { RestauranteService } from '../restaurante.service';
import { ROTAS } from '../../rotas-util/rotas.enum';
import { Restaurante } from '../../model/restaurante';

@Component({
  selector: 'manter-restaurante',
  templateUrl: './manter-restaurante.component.html',
  styleUrls: ['./manter-restaurante.component.css']
})
export class ManterRestauranteComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  titulo: string = '';
  isCadastro: boolean = true;
  id: number = 0;

  errorMessage: string = null;
  restaurante: Restaurante = new Restaurante();

  constructor(
    private _restauranteService: RestauranteService,
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  escutaId() {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    )
  }

  preparaModoTela() {
    if (this._route.snapshot.routeConfig.path == ROTAS.CADASTRAR_RESTAURANTE) {
      this.titulo = "Cadastro de Restaurante";
      this.isCadastro = true;
    } else {
      this.titulo = "Edição de Restaurante";
      this.isCadastro = false;

      this.getRestaurantesById(this.id);
    }
  }

  ngOnInit() {
    this.escutaId();
    this.preparaModoTela();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  getRestaurantesById(id: number) {
    this._restauranteService.getRestauranteById(id)
      .subscribe(
      restaurante => this.restaurante = restaurante,
      error => this.errorMessage = <any>error);
  }

  onSubmit(form) {
    this._restauranteService.salvar(this.restaurante)
      .subscribe(
      restaurante => this._router.navigate([ROTAS.PESQUISAR_RESTAURANTE]),
      error => this.errorMessage = <any>error)
  }

  isFieldInvalidAndTouched(campo) {
    return !campo.valid && campo.touched
  }
}