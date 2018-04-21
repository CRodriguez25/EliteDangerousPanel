import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IEventFeedSubscriber, EventFeedService } from '../../event-feed';

@Component({
  selector: 'app-ship-scan-modal',
  templateUrl: './ship-scan-modal.component.html',
  styleUrls: ['./ship-scan-modal.component.css']
})
export class ShipScanModalComponent implements OnInit, IEventFeedSubscriber {
    public shipScanEvent: any = null;

    constructor(public dialogRef: MatDialogRef<ShipScanModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private eventFeedService: EventFeedService
    ) { 
        this.eventFeedService.subscribe(this, ["ShipTargeted"])
        this.shipScanEvent = data.event;
    }

    ngOnInit() {
    
    }

    receiveEvent(event: any): void {
        if (!event.TargetLocked)
        {
            this.eventFeedService.unsubscribe(this);
            this.dialogRef.close();
            return;
        }

        this.shipScanEvent = event;
    }

    close() {
        this.dialogRef.close();
    }
}
