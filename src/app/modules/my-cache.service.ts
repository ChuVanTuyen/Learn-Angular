import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCacheService {
  constructor() { }
  cache = new Map<string, any>();
  getDataCache(key: string): any {
    return this.cache.get(key);
  }
  setDataCache(key: string, data: any) {
    this.cache.set(key, data);
  }
  has(key: string) {
    if (this.cache.has(key)) {
      return true;
    } else {
      return false;
    }
  }
}
