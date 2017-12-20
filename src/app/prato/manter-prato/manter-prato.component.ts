import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { PratoService } from '../prato.service';
import { Restaurante } from '../../model/restaurante';
import { RestauranteService } from '../../restaurante/restaurante.service';
import { ROTAS } from '../../rotas-util/rotas.enum';
import { Prato } from '../../model/prato';

@Component({
  selector: 'app-manter-prato',
  templateUrl: './manter-prato.component.html',
  styleUrls: ['./manter-prato.component.css']
})
export class ManterPratoComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  titulo: string = '';
  isCadastro: boolean = true;
  id: number = 0;

  errorMessage: string = null;
  prato: Prato = new Prato();
  restaurantes: Restaurante[] = [];

  constructor(
    private _restauranteService: RestauranteService,
    private _pratoService: PratoService,
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
    if (this._route.snapshot.routeConfig.path == ROTAS.CADASTRAR_PRATO) {
      this.titulo = "Cadastro de Prato";
      this.isCadastro = true;
    } else {
      this.titulo = "Edição de Prato";
      this.isCadastro = false;

      this.getPratosById(this.id);
    }
  }

  preparaListaRestaurantes() {

    this._restauranteService.getRestaurantes()
      .subscribe(
      restaurantes => { this.restaurantes = restaurantes; this.prato.restaurante = this.restaurantes[0]; },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.escutaId();
    this.preparaModoTela();
    this.preparaListaRestaurantes();
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  getPratosById(id: number) {
    this._pratoService.getPratosById(id)
      .subscribe(
      prato => this.prato = prato,
      error => this.errorMessage = <any>error);
  }

  onSubmit(form) {
    this._pratoService.salvar(this.prato)
      .subscribe(
      prato => this._router.navigate([ROTAS.PESQUISAR_PRATO]),
      error => this.errorMessage = <any>error)
  }

  isFieldInvalidAndTouched(campo) {
    return !campo.valid && campo.touched
  }
}