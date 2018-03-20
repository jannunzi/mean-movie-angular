import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {OmdbServiceClient} from '../services/omdb.service.client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [OmdbServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
