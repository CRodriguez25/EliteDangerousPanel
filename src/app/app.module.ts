import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AppComponent } from './app.component';
import { PanelButtonComponent } from './components/panel-button/panel-button.component';
import { EventFeedService } from './services/event-feed';
import { MatDialogModule, MatTabsModule, MatSnackBarModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
import { MessageHandlerService } from './services/message-handler/message-handler.service';
import { ShipScanModalComponent } from './services/ship-scan-handler/ship-scan-modal/ship-scan-modal.component';
import { ShipScanHandlerService } from './services/ship-scan-handler/ship-scan-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelButtonComponent,
    ScanModalComponent,
    CapitalizePipe,
    BountyModalComponent,
    SystemModalComponent,
    ShipScanModalComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [EventFeedService, 
    ScanningHandlerService, 
    MessageHandlerService,
    PanelActionService, 
    BountyHandlerService, 
    SystemInfoService, 
    SystemRepoService, 
    ShipScanHandlerService,
    DecimalPipe],
  bootstrap: [AppComponent],
  entryComponents: [ScanModalComponent, 
    BountyModalComponent, 
    SystemModalComponent,
    ShipScanModalComponent]
})
export class AppModule { }
