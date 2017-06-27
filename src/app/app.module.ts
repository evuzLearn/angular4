import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

import { youtubeSearchInjectable } from './injectables/youtube-search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    youtubeSearchInjectable
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
