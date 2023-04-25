import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiNoteService {

  constructor() { }
  urlCategory = 'https://api.mazii.net/api/get-category/0/100';
  urlGetNote = 'https://api.mazii.net/api/get-note/';

}
