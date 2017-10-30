import { Injectable, NgZone } from '@angular/core';
import { IEventFeedSubscriber } from './event-feed-subscriber';

@Injectable()
export class EventFeedService {
    private _eventSubscriptions: { [eventType: string]: Set<IEventFeedSubscriber>; };

    constructor(private zone: NgZone) { 
        var windowRef = this.getWindowRef();
        this._eventSubscriptions = {};
        windowRef.PanelsApp = windowRef.PanelsApp || {};
        windowRef.PanelsApp.ReceiveData = (event) => this.receiveData(event);
    }

    public subscribe(newSubscriber: IEventFeedSubscriber, eventTypes: string[]) {
        eventTypes.forEach((eventType) => {
            if (this._eventSubscriptions[eventType] == null) {
                this._eventSubscriptions[eventType] = new Set();
            }

            this._eventSubscriptions[eventType].add(newSubscriber);
        });
    }

    private receiveData(event): void {
        this.zone.run(() => {
            var eventType = event.event;
            var eventSubscribers = this._eventSubscriptions[eventType];
            if (eventSubscribers == null) return;
            eventSubscribers.forEach((subscriber) => {
                subscriber.receiveEvent(event);
            });
        });
    }

    private getWindowRef(): any {
        return window;
    }

}
