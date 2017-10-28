import { Input, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IEventFeedSubscriber, EventFeedService } from '../../services/event-feed';

@Component({
  selector: 'app-panel-button',
  templateUrl: './panel-button.component.html',
  styleUrls: ['./panel-button.component.css']
})
export class PanelButtonComponent implements OnInit, IEventFeedSubscriber {
  @Input() buttonId: string;
  public url: string;
  public glitching: boolean = false;
  public delay: number;
  constructor(private sanitizer: DomSanitizer, eventFeedService: EventFeedService) {
      eventFeedService.subscribe(this, ["HullDamage"]);
      this.delay = this.getDelay();
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  receiveEvent(event) {
    if(event.event == "HullDamage") {
        if (this.glitching) return;
        this.glitching = true;
        setTimeout(() => {
            this.glitching = false;
            this.delay = this.getDelay();
        }, 1000);
    }
  }

    getDelay() {
        return Math.floor(Math.random() * (4 - 0)) + 0;
    }

  ngOnInit() {
  
  }
}
