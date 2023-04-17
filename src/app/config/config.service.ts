import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  config: Config | undefined;
  getCategory() {
    return this.http.get<any>('https://api.mazii.net/api/get-category/0/100', {
      headers: {
        authorization: '101fba27ab9c4810f0a6d60bbb1935aa'
      }
    });
  }
  getItems(id: any) {
    return this.http.get<any>(`https://api.mazii.net/api/get-note/${id}/0/10`, {
      headers: {
        authorization: '101fba27ab9c4810f0a6d60bbb1935aa'
      }
    });
  }
}
