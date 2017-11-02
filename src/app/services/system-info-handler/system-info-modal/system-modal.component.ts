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
            this.formatFactions(this.systemInfo);
	    	if (this.systemInfo.Factions == null || this.systemInfo.Factions.length == 0) return;
            this.systemInfo.ControllingFaction = this.systemInfo.Factions[0];
    }

    public close(): void {
        this.dialogRef.close();
    }
    
    private formatFactions(systemInfo: any): any {
    	if (systemInfo.Factions == null || systemInfo.Factions.length == 0) return null;
    	systemInfo.Factions.sort((a, b) => {
    		if (a.Influence > b.Influence) return -1;
    		if (b.Influence > a.Influence) return 1;
    		return 0;
    	});
    	
    	systemInfo.Factions.forEach((faction) => {
    		faction.Influence = faction.Influence * 100;
    	});
    }
}
