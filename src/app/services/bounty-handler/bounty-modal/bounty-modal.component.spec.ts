import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BountyModalComponent } from './bounty-modal.component';

describe('BountyModalComponent', () => {
  let component: BountyModalComponent;
  let fixture: ComponentFixture<BountyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BountyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BountyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
