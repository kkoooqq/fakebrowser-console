import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDescImportDialogComponent } from './devicedesc-importdialog.component';

describe('DevicedescImportdialogComponent', () => {
  let component: DeviceDescImportDialogComponent;
  let fixture: ComponentFixture<DeviceDescImportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDescImportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDescImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
