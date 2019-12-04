import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


// import HTTP service:
import { HttpClientModule } from "@angular/common/http";

// import PokedexService
import { PokedexService } from "./pokedex.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    //httpservice
    HttpClientModule
  ],
  // register service as provider
  providers: [PokedexService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
