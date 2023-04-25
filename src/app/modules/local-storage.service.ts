import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  isSupport(): boolean {
    if (localStorage) {
      return true;
    }
    return false;
  }

  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  setItem(key: unknown, value: unknown): void {
    if (!this.isSupport()) {
      console.error("Trình duyệt này không hỗ trọ localStorage");
    }
    if (typeof key !== 'string') {
      console.error("key truyền vào cho local không phải là string");
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }

  }
  clear(): void {
    localStorage.clear();
  }
}
