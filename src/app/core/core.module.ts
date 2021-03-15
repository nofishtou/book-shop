import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { ConstantService } from './services/constant.service';
import { AppHighLightBgDirective } from './directives/app-high-light-bg.directive';
import { AppSelectElemWithColorDirective } from './directives/app-select-elem-with-color.directive';

@NgModule({
  declarations: [AppHighLightBgDirective, AppSelectElemWithColorDirective],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstantService, useValue: { App: 'Book Shop', Ver: '1.0' } },
  ],
  exports: [AppHighLightBgDirective, AppSelectElemWithColorDirective],
  imports: [CommonModule],
})
export class CoreModule {}
