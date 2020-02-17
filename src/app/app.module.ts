import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child2Component } from './components/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
