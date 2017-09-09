import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BobItGame } from './bob-it/bob.it.component';
import { Assignment } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    BobItGame,
    Assignment
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
