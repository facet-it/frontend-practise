import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BobItGame } from './bob-it/bob.it.component';
import { Assignment } from './assignment/assignment.component';
import { BobitInput } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    BobItGame,
    Assignment,
    BobitInput
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
