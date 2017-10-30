import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-bounty-modal',
    templateUrl: './bounty-modal.component.html',
    styleUrls: ['./bounty-modal.component.css']
})

export class BountyModalComponent {
    public bountyEvent: any = null;

    constructor(public dialogRef: MatDialogRef<BountyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
        this.bountyEvent = data.event;        
    }

    public close(): void {
        this.dialogRef.close();
    }
}
