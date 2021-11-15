import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIconComponent } from './job-icon.component';

describe('JobIconComponent', () => {
  let component: JobIconComponent;
  let fixture: ComponentFixture<JobIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
