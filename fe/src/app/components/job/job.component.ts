import {AfterViewInit, Component, OnInit} from '@angular/core'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {JobEntity} from '../../interfaces/job'
import {JobService} from '../../services/job.service'
import {JobGroupManageDialogComponent} from '../jobgroup-managedialog/jobgroup-managedialog.component'
import {JobEditDialogComponent} from '../job-editdialog/job-editdialog.component'

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
        public readonly editDialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
    }

    openEditGroupsDialog() {
        const dialog = this.editGroupDialog.open(JobGroupManageDialogComponent)
    }

    openJobEditDialog() {
        const dialog = this.editGroupDialog.open(JobEditDialogComponent)
    }

}
