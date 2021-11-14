import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDescComponent } from './devicedesc.component';

describe('DevicedescComponent', () => {
  let component: DeviceDescComponent;
  let fixture: ComponentFixture<DeviceDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
