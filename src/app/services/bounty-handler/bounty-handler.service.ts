import { Injectable } from '@angular/core';
import { IEventFeedSubscriber, EventFeedService } from '../event-feed';
import { MatDialog } from '@angular/material';

@Injectable()
export class BountyHandlerService implements IEventFeedSubscriber {
    constructor(private modalService: MatDialog, private eventFeedService: EventFeedService) { }
    
    start(): void {
    	this.eventFeedService.subscribe(this, ["Bounty"]);
    }
    
    receiveEvent(event): void {
    	
    }
}
