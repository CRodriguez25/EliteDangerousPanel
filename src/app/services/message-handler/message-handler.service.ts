import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { IEventFeedSubscriber, EventFeedService } from '../event-feed';

@Injectable()
export class MessageHandlerService implements IEventFeedSubscriber  {
    constructor(public snackBar: MatSnackBar,
        private eventFeedService: EventFeedService) { }
    
    start(): void {
        this.eventFeedService.subscribe(this, ["ReceiveText"]);
    }

    receiveEvent(event: any): void {
        var message = this.getMessage(event)
        if (message == null) return;
        this.snackBar.open(message, null, {
            politeness: "polite",
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 4000
        });
    }

    getMessage(event: any): string {
        var from = event.From_Localised || event.From;
        if (from == null) return null;
        return "Received Message From: " + from;
    }
}
