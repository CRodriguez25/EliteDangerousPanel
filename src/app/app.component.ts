import { Component } from '@angular/core';
import { ScanningHandlerService } from './services/scanning-handler/scanning-handler.service';
import { BountyHandlerService } from './services/bounty-handler/bounty-handler.service';
import { SystemInfoService } from './services/system-info-handler/system-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(
      private scanningHandler: ScanningHandlerService,
      private bountyHandler: BountyHandlerService,
      private systemInfoService: SystemInfoService
    ) {
      scanningHandler.start();
      bountyHandler.start();
      systemInfoService.start();
  }
}
