import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    HomeModule,
    AppRoutingModule
  ],/*
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
