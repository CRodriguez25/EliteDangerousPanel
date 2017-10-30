import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IEventFeedSubscriber, EventFeedService } from '../../services/event-feed';
import { PanelActionService } from '../../services/panel-action/panel-action.service';
@Component({
  selector: 'app-panel-button',
  templateUrl: './panel-button.component.html',
  styleUrls: ['./panel-button.component.css']
})
export class PanelButtonComponent implements OnInit, IEventFeedSubscriber {
  @Input() buttonId: string;
  @Input() buttonLabel: string;
  @Input() isPanelAction: boolean = true;
  @Output() onButtonPressed = new EventEmitter();

  public url: string;
  public glitching: boolean = false;
  public delay: number;
  public clicked: boolean = false;
  
    constructor(private sanitizer: DomSanitizer, eventFeedService: EventFeedService, private panelActionService: PanelActionService) {
        eventFeedService.subscribe(this, ["HullDamage", "HeatDamage", "HeatWarning"]);
        this.delay = this.getDelay();
    }

    pressButton(content) {
  	    this.clicked = true;	
  	    setTimeout(() => {
  		    this.clicked = false;
    	}, 75);

        if (this.onButtonPressed != null) {
            this.onButtonPressed.emit();
        }

        if(this.isPanelAction) {
            this.panelActionService.sendPanelAcction(this.buttonId);
        }
    }

    receiveEvent(event) {
        if (this.glitching) return;
        this.glitching = true;
        setTimeout(() => {
            this.glitching = false;
            this.delay = this.getDelay();
        }, 5000);
    }

    getDelay() {
        return Math.floor(Math.random() * 4);
    }

    ngOnInit() { }
}
