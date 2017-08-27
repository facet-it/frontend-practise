import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Output } from './output/output.component';
import { RandomNumbers } from './numbergenerator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    Output,
    RandomNumbers
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
