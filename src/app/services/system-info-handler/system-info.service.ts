import { Injectable } from '@angular/core';
import { SystemRepoService } from '../system-repository/system-repo.service';
import { IEventFeedSubscriber, EventFeedService } from '../event-feed';
import { MatDialog } from '@angular/material';
import { SystemModalComponent } from './system-info-modal/system-modal.component';

@Injectable()
export class SystemInfoService implements IEventFeedSubscriber {
    constructor(
      private systemRepoService: SystemRepoService,
      private modalService: MatDialog,
      private eventFeedService: EventFeedService) { 
    }

    start(): void {
        this.eventFeedService.subscribe(this, ["FSDJump"]);
    }

    receiveEvent(event): void {
        var system = event.StarSystem;
        this.systemRepoService.getSystemData(system).then((response) => {
            if (response == null) return;
            this.modalService.closeAll();
            let dialogRef = this.modalService.open(SystemModalComponent, {
                width: '80vw',
                data: { systemInfo: response }
            })
        });
    }
}
