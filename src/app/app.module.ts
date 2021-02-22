import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookComponentComponent } from './components/book-component/book-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { CardItemComponent } from './components/card-component/card-item/card-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    CardComponentComponent,
    CardItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
