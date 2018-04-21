import { Injectable } from '@angular/core';
import { IEventFeedSubscriber, EventFeedService } from '../event-feed';
import { ScanModalComponent } from './scan-modal/scan-modal.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class ScanningHandlerService implements IEventFeedSubscriber {
    constructor(private modalService: MatDialog, 
        private eventFeedService: EventFeedService) { }

    start(): void {
        this.eventFeedService.subscribe(this, ["Scan"]);
    }

    receiveEvent(event: any): void {
        this.modalService.closeAll();
        let dialogRef = this.modalService.open(ScanModalComponent, {
            width: '80vw',
            hasBackdrop: true,
            data: { event: event }
        });
    }
}
