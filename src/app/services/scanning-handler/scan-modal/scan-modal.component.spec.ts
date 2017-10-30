import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanModalComponent } from './scan-modal.component';

describe('ScanModalComponent', () => {
  let component: ScanModalComponent;
  let fixture: ComponentFixture<ScanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
