import { Injectable } from '@angular/core';
import { IEventFeedSubscriber, EventFeedService } from '../event-feed';
import { MatDialog } from '@angular/material';
import { BountyModalComponent } from './bounty-modal/bounty-modal.component';

@Injectable()
export class BountyHandlerService implements IEventFeedSubscriber {
    constructor(private modalService: MatDialog, private eventFeedService: EventFeedService) { }
    
    start(): void {
    	this.eventFeedService.subscribe(this, ["Bounty"]);
    }
    
    receiveEvent(event): void {
    	this.modalService.closeAll();
        let dialogRef = this.modalService.open(BountyModalComponent, {
            width: '50vw',
            data: { event: event }
        });
    }
}
