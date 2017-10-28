import { Input, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IEventFeedSubscriber, EventFeedService } from '../../services/event-feed';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  public clicked: boolean = false;
  
  constructor(private sanitizer: DomSanitizer, eventFeedService: EventFeedService, private modalService: NgbModal) {
      eventFeedService.subscribe(this, ["HullDamage"]);
      this.delay = this.getDelay();
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  pressButton(content) {
  	debugger;
  	this.modalService.open(content).result.then(() => {});
  	this.clicked = true;	
  	setTimeout(() => {
  		this.clicked = false;
  	}, 75);
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
        return Math.floor(Math.random() * 4);
    }

  ngOnInit() { }
}
