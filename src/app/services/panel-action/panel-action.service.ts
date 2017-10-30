import { Injectable } from '@angular/core';
import { NgZone } from '@angular/core';

@Injectable()
export class PanelActionService {
    constructor(private zone: NgZone) { }
    
    public sendPanelAcction(buttonId: string): void {
        window.location.href = "panelsapp://" + buttonId;
    }
}
