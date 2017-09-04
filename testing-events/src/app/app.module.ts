import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {BasicEventing} from './basic/basic.component';
import {Simon} from './simonsays/simon.component';
import {Repeater} from './repeater/repeater.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicEventing,
    Simon,
    Repeater
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
