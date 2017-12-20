import { Component, OnInit } from '@angular/core';

import { PratoService } from '../prato.service';
import { Prato } from '../../model/prato';

@Component({
  selector: 'pesquisar-prato',
  templateUrl: './pesquisar-prato.component.html',
  styleUrls: ['./pesquisar-prato.component.css']
})
export class PesquisarPratoComponent {

  titulo: string = "Pratos";

  errorMessage: string = null;
  pratos: Prato[];

  constructor(private _pratoService: PratoService) {
  }

  ngOnInit(): void {
    this.getPratos();
  }

  getPratos() {
    this._pratoService.getPratos()
      .subscribe(
      pratos => this.pratos = pratos,
      error => this.errorMessage = <any>error);
  }

  excluir(pratoId: number) {
    this._pratoService.excluir(pratoId)
      .subscribe(
        pratos => this.getPratos(),
      error => this.errorMessage = <any>error);
  }

  hasPrato(): boolean {
    return (this.pratos != null && this.pratos.length > 0);
  }

  hasNotPrato(): boolean {
    return !this.hasPrato();
  }
}