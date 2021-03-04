import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ConstantService } from './services/constant.service';

@NgModule({
  declarations: [],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstantService, useValue: { App: 'Book Shop', Ver: '1.0' } },
  ],
  imports: [CommonModule],
})
export class CoreModule {}
