import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Restaurante } from '../model/restaurante';

@Injectable()
export class RestauranteService {

  private restauranteUrl = 'http://localhost:3766/api/Restaurante';

  constructor(private _http: Http) { }

  getRestaurantes(): Observable<Restaurante[]> {
    return this._http.get(this.restauranteUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRestauranteById(id: number): Observable<Restaurante> {
    return this._http.get(this.restauranteUrl + `/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRestaurantesByNome(filtro: String): Observable<Restaurante[]> {
    return this._http.get(this.restauranteUrl + `/${filtro}/pesquisar`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  excluir(id: number): Observable<Restaurante> {
    return this._http.delete(this.restauranteUrl + `/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  salvar(restaurante: Restaurante): Observable<Restaurante> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(restaurante);

    return this._http.post(this.restauranteUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();

    if ((body.status == 'Sucess') && (body.message == null)) {
      return body.result;
    }

    return null;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(error);
    console.log(errMsg);

    return Observable.throw(errMsg);
  }
}