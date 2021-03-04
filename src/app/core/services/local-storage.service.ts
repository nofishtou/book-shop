import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private storage = window.localStorage;

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(key)) || null;
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }
}
