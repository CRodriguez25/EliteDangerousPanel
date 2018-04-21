import { Injectable } from '@angular/core';
import { EventFeedService, IEventFeedSubscriber } from '../event-feed';
import { MatDialog } from '@angular/material';
import { ShipScanModalComponent } from './ship-scan-modal/ship-scan-modal.component';

@Injectable()
export class ShipScanHandlerService implements IEventFeedSubscriber {
    private _shipScanModalOpen: boolean = false;

    constructor(private modalService: MatDialog,
        private eventFeedService: EventFeedService) { }

    start(): void {
        this.eventFeedService.subscribe(this, ["ShipTargeted"])
    }

    receiveEvent(event: any): void {
        if (this._shipScanModalOpen || !event.TargetLocked) return;
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
}
