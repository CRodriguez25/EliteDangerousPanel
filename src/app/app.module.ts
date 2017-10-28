import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelButtonComponent } from './components/panel-button/panel-button.component';
import { EventFeedService } from './services/event-feed';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PanelButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [EventFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
