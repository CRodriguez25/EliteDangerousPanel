import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipScanModalComponent } from './ship-scan-modal.component';

describe('ShipScanModalComponent', () => {
  let component: ShipScanModalComponent;
  let fixture: ComponentFixture<ShipScanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipScanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipScanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
