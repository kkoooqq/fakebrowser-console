import {AfterViewInit, Component, Inject, OnInit} from '@angular/core'
import {JobGroupEntity} from '../../interfaces/jobgroup'
import {JobGroupService} from '../../services/jobgroup.service'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {Observable} from 'rxjs'

@Component({
    selector: 'app-jobgroup-managedialog',
    templateUrl: './jobgroup-editdialog.component.html',
    styleUrls: ['./jobgroup-editdialog.component.css'],
})
export class JobGroupEditDialogComponent implements OnInit, AfterViewInit {

    constructor(
        public dialogRef: MatDialogRef<JobGroupEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { isAdd: boolean, jobGroup: JobGroupEntity },
        private readonly jobGroupService: JobGroupService,
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    conformButtonTapped() {
        const jobGroup = this.data.jobGroup

        let ob: Observable<any>

        // TODO: loading
        if (this.data.isAdd) {
            ob = this.jobGroupService.create(jobGroup)
        } else {
            ob = this.jobGroupService.update(jobGroup)
        }

        ob.subscribe((result) => {
            // TODO: check result
            this.dialogRef.close(result)
        }, (error) => {

        })
    }
}
