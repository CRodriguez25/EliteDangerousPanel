import { Component } from '@angular/core';
import { ScanningHandlerService } from './services/scanning-handler/scanning-handler.service';
import { BountyHandlerService } from './services/bounty-handler/bounty-handler.service';
import { SystemInfoService } from './services/system-info-handler/system-info.service';
import { MessageHandlerService } from './services/message-handler/message-handler.service';
import { ShipScanHandlerService } from './services/ship-scan-handler/ship-scan-handler.service';
import { StatusFeedService } from './services/status-feed/status-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(
      private scanningHandler: ScanningHandlerService,
      private bountyHandler: BountyHandlerService,
      private systemInfoService: SystemInfoService,
      private messageHandlerService: MessageHandlerService,
      private shipScanHandlerService: ShipScanHandlerService,
      private statusFeedService: StatusFeedService
    ) {
      scanningHandler.start();
      bountyHandler.start();
      systemInfoService.start();
      messageHandlerService.start();
      shipScanHandlerService.start();
      statusFeedService.start();
  }
}
