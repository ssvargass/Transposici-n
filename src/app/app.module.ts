import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { TranspositionComponent }  from './components/transposition.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    TranspositionComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
