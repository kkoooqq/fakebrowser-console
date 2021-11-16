import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {JobEntity} from '../../interfaces/job'
import {JobIconInfo} from '../job-panel/job.component'
import {JobService} from '../../services/job.service'

@Component({
    selector: 'app-job-editdialog',
    templateUrl: './job-editdialog.component.html',
    styleUrls: ['./job-editdialog.component.css'],
})
export class JobEditDialogComponent implements OnInit {

    displayNameError: boolean = false

    constructor(
        public dialogRef: MatDialogRef<JobEditDialogComponent>,
        private jobService: JobService,
        @Inject(MAT_DIALOG_DATA) public data: {
            isAdd: boolean,
            group_id: number,
            job?: JobEntity
        },
    ) {
        if (!this.data.job) {
            this.data.job = {
                shutdownWhenDone: true,
                created: new Date(),
                displayUserActionLayer: false,
                doNotHook: false,
                group_id: this.data.group_id,
                headless: false,
                maxSurvivalTime: 15 * 1000 * 60,
                name: '',
                platform: 'Windows',
                script: '',
                updated: new Date(),
                userDataDir: ''
            }
        }
    }

    ngOnInit(): void {
    }

    saveResult() {
        if (!this.data.job?.name) {
            this.displayNameError = true
            return
        }

        if (this.data.isAdd) {
            this.jobService.create(this.data.job!).subscribe(() => {
                this.dialogRef.close()
            })
        } else {
            this.jobService.update(this.data.job!).subscribe(() => {
                this.dialogRef.close()
            })
        }
    }
}
