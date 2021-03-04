import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  exports: [MatButtonModule, MatButtonToggleModule, MatCardModule, CommonModule, CoreModule],
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule, MatCardModule, CoreModule],
})
export class SharedModuleModule {}
