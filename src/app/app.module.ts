import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

import { youtubeSearchInjectable } from './injectables/youtube-search.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent
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
