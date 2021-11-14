import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDescStatDialogComponent } from './devicedesc-statdialog.component';

describe('DevicedescstatdialogComponent', () => {
  let component: DeviceDescStatDialogComponent;
  let fixture: ComponentFixture<DeviceDescStatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDescStatDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDescStatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
