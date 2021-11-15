import {AfterViewInit, Component, OnInit} from '@angular/core'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {JobEntity} from '../../interfaces/job'
import {JobService} from '../../services/job.service'
import {JobEditGroupDialogComponent} from '../job-editgroupdialog/job-editgroupdialog.component'

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit, AfterViewInit {

    data: JobEntity[] = []
    isLoadingResults = true

    constructor(
        private readonly jobService: JobService,
        public readonly editGroupDialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    openEditGroupsDialog() {
        const dialog = this.editGroupDialog.open(JobEditGroupDialogComponent)
    }

}
