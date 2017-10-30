import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-scan-modal',
    templateUrl: './scan-modal.component.html',
    styleUrls: ['./scan-modal.component.css']
})

export class ScanModalComponent {
    public scanEvent: any = null;

    constructor(public dialogRef: MatDialogRef<ScanModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
        this.scanEvent = data.event;        
    }

    public close(): void {
        this.dialogRef.close();
    }
}
