import { Injectable } from '@angular/core';
import { EventFeedService, IEventFeedSubscriber } from '../event-feed';
import { IStatusFeedSubscriber, StatusChangeType } from './status-feed-subscriber';

@Injectable()
export class StatusFeedService implements IEventFeedSubscriber {
    constructor(private eventFeedService: EventFeedService) { }
    private _statusSubscriptions: { [statusType: string]: Set<IStatusFeedSubscriber>; };
    private _currentStatus: { [statusType: string]: boolean; };

    start(): void {
        this.eventFeedService.subscribe(this, ["Status"]);
    }

    receiveEvent(event: any): void {
        var currentStatus = event.CurrentStatus;
    }
}
