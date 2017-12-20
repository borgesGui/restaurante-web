import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import { Prato } from "./model/prato";

@Injectable()
export class PostService {
    constructor(private http:Http) {
    }

    getData():Observable<Prato[]> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts/')
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

//https://namitamalik.github.io/Fetching-Data-in-Angular2/
//https://www.metaltoad.com/blog/angular-2-http-observables-and-concurrent-data-loading
//https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api
//https://www.concretepage.com/angular-2/angular-2-http-post-example