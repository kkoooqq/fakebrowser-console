import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'

import {JobEntity} from '../../interfaces/job'
import {JobService} from '../../services/job.service'
import {JobGroupManageDialogComponent} from '../jobgroup-managedialog/jobgroup-managedialog.component'
import {JobEditDialogComponent} from '../job-editdialog/job-editdialog.component'
import {JobGroupService} from '../../services/jobgroup.service'
import {JobGroupEntity} from '../../interfaces/jobgroup'
import {MatTabGroup} from '@angular/material/tabs'
import {combineLatest, combineLatestAll, Observable} from 'rxjs'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

export class JobIconInfo {
    constructor(
        public jobEntity?: JobEntity,
    ) {
    }
}

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit, AfterViewInit {

    jobGroups: JobGroupEntity[] = []
    jobs: JobEntity[] = []
    jobInfos: Record<number, JobIconInfo[]> = {}
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

        BrowserAnimationsModule.withConfig({
            disableAnimations: true
        })

        this.jobGroupService.getAll().subscribe((jobGroups) => {
            this.jobGroups = jobGroups
            this.jobGroupTab.selectedIndex = jobGroups.findIndex(e => e.activated)

            const jobInfos: Record<number, JobIconInfo[]> = {}
            for (const jobGroup of jobGroups) {
                jobInfos[jobGroup.id] = []
            }

            this.jobService.getAll().subscribe((jobs) => {
                for (const job of jobs) {
                    let jobParts = jobInfos[job.group_id]
                    jobParts!.push(new JobIconInfo(job))
                }

                // at least 12 icons per group
                for (const [group_id, jobIcons] of Object.entries(jobInfos)) {
                    jobIcons.push(new JobIconInfo())

                    for (; jobIcons.length < 12;) {
                        jobIcons.push(new JobIconInfo())
                    }
                }

                this.jobInfos = jobInfos
                this.jobs = jobs

                BrowserAnimationsModule.withConfig({
                    disableAnimations: false
                })
            })
        })
    }

    get currentSelectedGroupId(): number {
        if (this.jobGroupTab.selectedIndex === null) {
            return 0
        }

        if (!this.jobGroupTab._tabs.length) {
            return 0
        }

        if (!this.jobGroups) {
            return 0
        }

        const jobGroup = this.jobGroups[this.jobGroupTab.selectedIndex]
        if (!jobGroup) {
            return 0
        }

        return jobGroup.id
    }

    get currentTabJobIcons(): JobIconInfo[] {
        if (!this.jobGroupTab.selectedIndex) {
            return []
        }

        if (!this.jobGroups) {
            return []
        }

        const jobGroup = this.jobGroups[this.jobGroupTab.selectedIndex]
        if (!jobGroup) {
            return []
        }

        return this.jobInfos[jobGroup.id] || []
    }

    openEditGroupsDialog() {
        const dialog = this.editGroupDialog.open(JobGroupManageDialogComponent)
        dialog.afterClosed().subscribe(() => {
            this.requestJobGroups()
        })
    }

    openJobEditDialog(job: JobEntity | JobIconInfo) {
        let jobEntity = null
        if (job instanceof JobIconInfo) {
            jobEntity = job.jobEntity
        } else {
            jobEntity = job
        }

        const dialog = this.editGroupDialog.open(JobEditDialogComponent, {
            data: {
                isAdd: !jobEntity,
                group_id: this.currentSelectedGroupId,
                job: jobEntity,
            },
        })

        dialog.afterClosed().subscribe(() => {
            this.requestJobGroups()
        })
    }

    openNewJobDialog() {
        const dialog = this.editGroupDialog.open(JobEditDialogComponent, {
            data: {
                isAdd: true,
                group_id: this.currentSelectedGroupId,
                job: null,
            },
        })

        dialog.afterClosed().subscribe(() => {
            this.requestJobGroups()
        })
    }
}
