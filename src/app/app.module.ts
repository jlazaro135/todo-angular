import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskRowComponent } from './task-row/task-row.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TaskCounterComponent } from './task-counter/task-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskRowComponent,
    SearchBarComponent,
    TaskCounterComponent
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
