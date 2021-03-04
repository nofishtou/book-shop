import { Injectable } from '@angular/core';
import { IConfig } from '../models/Config';

@Injectable()
export class ConfigOptionsService {
  private config: IConfig;

  setItem(newConfig: IConfig) {
    this.config = newConfig;
  }

  getItem() {
    return this.config;
  }
}
