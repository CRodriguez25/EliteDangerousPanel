import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelButtonComponent } from './components/panel-button/panel-button.component';
import { EventFeedService } from './services/event-feed';

@NgModule({
  declarations: [
    AppComponent,
    PanelButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
