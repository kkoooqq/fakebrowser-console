import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpanelComponent } from './controlpanel.component';

describe('ControlpanelComponent', () => {
  let component: ControlpanelComponent;
  let fixture: ComponentFixture<ControlpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
