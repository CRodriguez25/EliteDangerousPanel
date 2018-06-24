import { Injectable } from '@angular/core';
import { EventFeedService, IEventFeedSubscriber } from '../event-feed';
import { MatDialog } from '@angular/material';
import { ShipScanModalComponent } from './ship-scan-modal/ship-scan-modal.component';
import { IStatusFeedSubscriber, IStatusChange } from '../status-feed/status-feed-subscriber';
import { StatusFeedService } from '../status-feed/status-feed.service';

@Injectable()
export class ShipScanHandlerService implements IEventFeedSubscriber, IStatusFeedSubscriber {
    private _shipScanModalOpen: boolean = false;
    private _danger: boolean = false;

    constructor(private modalService: MatDialog,
        private eventFeedService: EventFeedService,
        private statusFeedService: StatusFeedService
    ) { }

    start(): void {
        this.eventFeedService.subscribe(this, ["ShipTargeted"])
        this.statusFeedService.subscribe(this, ["IsInDanger"]);
    }

    receiveEvent(event: any): void {
        if (this._shipScanModalOpen || !event.TargetLocked || this._danger) return;
        this.modalService.closeAll();
        let dialogRef = this.modalService.open(ShipScanModalComponent, {
            width: '80vw', 
            hasBackdrop: true,
            data: { event: event },
        }).afterClosed().subscribe(() => {
            this._shipScanModalOpen = false;
        });

        this._shipScanModalOpen = true;
    }

    statusChanged(change: IStatusChange) {
        if (change.type == "IsInDanger") 
            this._danger = change.newValue;
    }
}
