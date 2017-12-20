import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Prato } from '../model/prato';

@Injectable()
export class PratoService {

  private pratoUrl = 'http://localhost:3766/api/Prato';

  constructor(private _http: Http) { }

  getPratos(): Observable<Prato[]> {
    return this._http.get(this.pratoUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPratosById(id: number): Observable<Prato> {
    return this._http.get(this.pratoUrl + `/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  excluir(id: number): Observable<Prato> {
    return this._http.delete(this.pratoUrl + `/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  salvar(prato: Prato): Observable<Prato> {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(prato);

    return this._http.post(this.pratoUrl, body, options)
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