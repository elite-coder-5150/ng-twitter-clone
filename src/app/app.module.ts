import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetFeedComponent } from './tweet-feed/tweet-feed.component';
import { MessagesComponent } from './messages/messages.component';





@NgModule({
  declarations: [
    AppComponent,
    TweetFeedComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
