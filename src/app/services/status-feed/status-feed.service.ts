import { Injectable } from '@angular/core';
import { EventFeedService, IEventFeedSubscriber } from '../event-feed';
import { IStatusFeedSubscriber, StatusChangeType, IStatusChange } from './status-feed-subscriber';

@Injectable()
export class StatusFeedService implements IEventFeedSubscriber {
    private _statusSubscriptions: { [statusType: string]: Set<IStatusFeedSubscriber>; };
    private _currentStatus: { [statusType: string]: boolean; };
    private _statusTypes = [
        "Docked", 
        "Landed", 
        "LandingGearDown", 
        "ShieldsUp",
        "Supercruise",
        "FlightAssistOff",
        "HardpointsDeployed",
        "InWing",
        "LightsOn",
        "CargoScoopDeployed",
        "SilentRunning",
        "ScoopingFuel",
        "SrvHandbrake",
        "SrvTurret",
        "SrvUnderShip",
        "SrvDriveAssist",
        "FsdMassLocked",
        "FsdCharging",
        "FsdCooldown",
        "LowFuel",
        "OverHeating",
        "HasLatLong",
        "IsInDanger",
        "BeingInterdicted"
    ]

    constructor(private eventFeedService: EventFeedService) { 
        this._statusSubscriptions = {};
    }

    public start(): void {
        this.eventFeedService.subscribe(this, ["Status"]);
    }

    public subscribe(newSubscriber: IStatusFeedSubscriber, types: string[])
    {
        types.forEach((type) => {
            if (this._statusSubscriptions[type] == null)
            {
                this._statusSubscriptions[type] = new Set();
            }

            this._statusSubscriptions[type].add(newSubscriber);
        })
    }

    public receiveEvent(event: any): void {
        if (this._currentStatus == null) {
            this._currentStatus = event.currentStatus;
            this.notifyAll();
            return;
        }

        this.notifyChanges(event.currentStatus);
        this._currentStatus = event.currentStatus;
    }

    public notifyAll(): void {
        this._statusTypes.forEach(type => {
            this.notifySubscribers({
                type: type,
                newValue: this._currentStatus[type]
            });
        });
    }
        
    notifyChanges(newStatuses : { [statusType: string]: boolean; }): void {
        this._statusTypes.forEach(x => {
            var currentStatus = this._currentStatus[x] || false;
            var newStatus = newStatuses[x] || false;
            if (currentStatus != newStatus)
            {
                this.notifySubscribers({
                    type: x,
                    newValue: newStatus
                });
            }
        });
    }

    notifySubscribers(change: IStatusChange)
    {
        if (this._statusSubscriptions == null) return;
        var subscribers = this._statusSubscriptions[change.type];
        if (subscribers == null) return;
        subscribers.forEach((subscriber) => {
            subscriber.statusChanged(change);
        });
    }
}
