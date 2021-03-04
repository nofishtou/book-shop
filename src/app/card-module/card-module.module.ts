import { NgModule } from '@angular/core';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { CardServiceService } from './services/card-service.service';

@NgModule({
  declarations: [CardListComponent, CardItemComponent],
  exports: [CardListComponent],
  providers: [CardServiceService],
  imports: [SharedModuleModule],
})
export class CardModuleModule {}
