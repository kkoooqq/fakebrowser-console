import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobEditGroupDialogComponent } from './job-editgroupdialog.component';

describe('JobEditgroupdialogComponent', () => {
  let component: JobEditGroupDialogComponent;
  let fixture: ComponentFixture<JobEditGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobEditGroupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobEditGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
