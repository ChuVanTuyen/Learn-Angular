import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { CacheNoteService } from '../modules/my-cache.service';
import { ApiNoteService } from './api-note.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpClient, private cacheNote: CacheNoteService, private apiNote: ApiNoteService) { }
  getCategory() {
    let urlCategory = this.apiNote.urlCategory;
    if (this.cacheNote.has(urlCategory)) {
      return of(this.cacheNote.getDataCache(urlCategory));// lấy data từ cache
    }
    else {// nếu trong cache chưa có data thì thực hiện gọi api
      // this.cacheNote.setDataCache(urlCategory, this.categories);// lưu data vào cache
      return this.http.get<any>(urlCategory, {
        headers: {
          authorization: '101fba27ab9c4810f0a6d60bbb1935aa'
        }
      })
        .pipe(
          catchError((err) => { return throwError('Lỗi rồi!') }),
          map((data) => {
            this.cacheNote.setDataCache(urlCategory, data);// lưu data vào cache
            return data;
          })
        );
    }
  }
  getItems(id: any) {
    let url = `${this.apiNote.urlGetNote}${id}/0/10`;
    if (this.cacheNote.has(url)) {// nếu đã từng gọi api và data đã được lưu vào cache
      return of(this.cacheNote.getDataCache(url));// lấy data từ cache
    } else {// thực hiện call api
      return this.http.get<any>(url, {
        headers: {
          authorization: '101fba27ab9c4810f0a6d60bbb1935aa'
        }
      })
        .pipe(
          catchError((err) => { return throwError('Lỗi đường dẫn rồi!') }),
          map((data) => {
            this.cacheNote.setDataCache(url, data);// lưu data vào cache
            return data;
          })
        );
    }
  }
}
