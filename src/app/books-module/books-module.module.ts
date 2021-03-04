import { NgModule } from '@angular/core';
import { BookItemComponent } from './components/book-item/book-item.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksServiceService } from './services/books-service.service';

@NgModule({
  declarations: [BookItemComponent, BookListComponent],
  exports: [BookListComponent],
  providers: [BooksServiceService],
  imports: [SharedModuleModule],
})
export class BooksModuleModule {}
