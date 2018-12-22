import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {

    constructor(
        private http: Http
    ) { }

    sendEmail(url, data) {
        let header = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(url, data, { headers: header }).map(res => res.json());
    }
}