import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SystemRepoService {
	private systemLookup: { [systemName: string]: any } = null;
	private minorFactionLookup: { [factionName: string]: any } = null;

	constructor(private httpClient: HttpClient) { }

    public getSystemData(systemName: string) {
        return new Promise((resolve, reject) => {
            var lookupName = systemName.toUpperCase();
            this.httpClient
                .get("https://system.api.fuelrats.com/populated_systems?filter[name:eq]=" + lookupName)
                .toPromise()
                .then((result: any) => {
                    if(result.meta.returned <= 0) reject("System info not found");
                    var systemData = result.data[0].attributes;
                    var factions: any[] = systemData.minor_faction_presences;
                    factions.sort((a, b) => {
                       if (a.influence > b.influence) return -1;
                       if (a.influence < b.influence) return 1;
                       return 0;
                    });

                    if(factions == null || factions.length == 0) 
                        resolve(systemData);
                    
                    Observable.forkJoin(
                        factions.map((faction) => {
                               return this.httpClient
                                    .get("https://system.api.fuelrats.com/factions?filter[id:eq]=" + faction.minor_faction_id)
                                    .toPromise()
                        })
                    ).subscribe((result: any[]) => {
                        var factionLookup = this.formatData(factions, "minor_faction_id");
                        result.forEach((factionData) => {
                            var factionToUpdate = factionLookup[factionData.data[0].id];
                            factionToUpdate.factionDetails = factionData.data[0].attributes;
                        })

                        resolve(systemData);
                    });
                });
        });
    }

    private formatData(data, key: string) {
        var result = {};

        data.forEach((info) => {
            var id: string = info[key];
            result[id] = info;    
        });

        return result;
    }
}
