import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-system-modal',
  templateUrl: './system-modal.component.html',
  styleUrls: ['./system-modal.component.css']
})
export class SystemModalComponent {
    public systemInfo: any = null;

    constructor(public dialogRef: MatDialogRef<SystemModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            this.systemInfo = data.systemInfo;
    }

    public close(): void {
        this.dialogRef.close();
    }
}
