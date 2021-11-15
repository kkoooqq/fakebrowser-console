import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'

import {JobEntity} from '../../interfaces/job'
import {JobService} from '../../services/job.service'
import {JobGroupManageDialogComponent} from '../jobgroup-managedialog/jobgroup-managedialog.component'
import {JobEditDialogComponent} from '../job-editdialog/job-editdialog.component'
import {JobGroupService} from '../../services/jobgroup.service'
import {JobGroupEntity} from '../../interfaces/jobgroup'
import {MatTabGroup} from '@angular/material/tabs'

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit, AfterViewInit {

    jobGroups: JobGroupEntity[] = []
    data: JobEntity[] = []
    isLoadingResults = true
    @ViewChild('jobGroupTab') jobGroupTab: MatTabGroup

    constructor(
        private readonly jobService: JobService,
        private readonly jobGroupService: JobGroupService,
        public readonly editGroupDialog: MatDialog,
        public readonly editDialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.requestJobGroups()

        this.jobGroupTab.selectedIndexChange.subscribe((index) => {
            this.jobGroups.forEach((e) => {
                e.activated = false
            })

            const currJobGroup = this.jobGroups[index]
            currJobGroup.activated = true

            this.jobGroupService.active(currJobGroup).subscribe(e => e)
        })
    }

    private requestJobGroups() {
        // TODO: loading
        this.jobGroupService.getAll().subscribe((jobGroups) => {
            this.jobGroups = jobGroups
        })
    }

    openEditGroupsDialog() {
        const dialog = this.editGroupDialog.open(JobGroupManageDialogComponent)
        dialog.afterClosed().subscribe(() => {
            this.requestJobGroups()
        })
    }

    openJobEditDialog() {
        const dialog = this.editGroupDialog.open(JobEditDialogComponent)
    }


}
