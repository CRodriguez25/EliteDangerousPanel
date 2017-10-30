import { Component } from '@angular/core';
import { ScanningHandlerService } from './services/scanning-handler/scanning-handler.service';
import { BountyHandlerService } from './services/bounty-handler/bounty-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Test 2';

  constructor(
      private scanningHandler: ScanningHandlerService,
      private bountyHandler: BountyHandlerService
    ) {
      scanningHandler.start();
      bountyHandler.start();
  }
}
