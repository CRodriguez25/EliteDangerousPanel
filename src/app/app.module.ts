import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelButtonComponent } from './components/panel-button/panel-button.component';
import { EventFeedService } from './services/event-feed';
import { MatDialogModule, MatTabsModule } from '@angular/material';
import { ScanModalComponent } from './services/scanning-handler/scan-modal/scan-modal.component';
import { ScanningHandlerService } from './services/scanning-handler/scanning-handler.service';
import { BountyHandlerService } from './services/bounty-handler/bounty-handler.service';
import { BountyModalComponent } from './services/bounty-handler/bounty-modal/bounty-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PanelActionService } from './services/panel-action/panel-action.service';
import { SystemModalComponent } from './services/system-info-handler/system-info-modal/system-modal.component';
import { SystemInfoService } from './services/system-info-handler/system-info.service';
import { SystemRepoService } from './services/system-repository/system-repo.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelButtonComponent,
    ScanModalComponent,
    CapitalizePipe,
    BountyModalComponent,
    SystemModalComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [EventFeedService, ScanningHandlerService, PanelActionService, BountyHandlerService, SystemInfoService, SystemRepoService],
  bootstrap: [AppComponent],
  entryComponents: [ScanModalComponent, BountyModalComponent, SystemModalComponent]
})
export class AppModule { }
