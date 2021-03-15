import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { OrderByPipePipe } from './pipes/order-by-pipe.pipe';

@NgModule({
  declarations: [OrderByPipePipe],
  exports: [MatButtonModule, MatButtonToggleModule, MatCardModule, CommonModule, CoreModule, FormsModule, OrderByPipePipe],
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule, MatCardModule, CoreModule, FormsModule],
})
export class SharedModuleModule {}
