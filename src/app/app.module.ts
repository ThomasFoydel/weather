import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DayCardComponent } from './day-card/day-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    DataDisplayComponent,
    DayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
