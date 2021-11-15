import {AfterViewInit, Component, OnInit} from '@angular/core'
import {SelectionModel} from '@angular/cdk/collections'
import {MatTableDataSource} from '@angular/material/table'

import {JobGroupEntity} from '../../interfaces/jobgroup'
import {JobGroupService} from '../../services/jobgroup.service'
import {MatDialog} from '@angular/material/dialog'
import {JobGroupEditDialogComponent} from '../jobgroup-editdialog/jobgroup-editdialog.component'

@Component({
    selector: 'app-jobgroup-managedialog',
    templateUrl: './jobgroup-managedialog.component.html',
    styleUrls: ['./jobgroup-managedialog.component.css'],
})
export class JobGroupManageDialogComponent implements OnInit, AfterViewInit {

    dataSource = new MatTableDataSource<JobGroupEntity>()
    selection = new SelectionModel<JobGroupEntity>(true, [])
    displayColumn = ['select', 'id', 'name']

    constructor(
        private readonly jobGroupService: JobGroupService,
        private readonly editJobGroupDialog: MatDialog,
    ) {
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length
        const numRows = this.dataSource.data.length
        return numSelected === numRows
    }

    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear()
            return
        }

        this.selection.select(...this.dataSource.data)
    }

    checkboxLabel(row?: JobGroupEntity): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`
        }

        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.requestData()
    }

    private requestData() {
        // cache selected ids
        const selectedIds = this.selection.selected.map(e => e.id)

        this.jobGroupService.getAll().subscribe((jobGroups) => {
            this.dataSource.data = jobGroups
            this.selection.clear()
            this.selection.select(
                ...jobGroups.filter(e => selectedIds.includes(e.id)),
            )
        })

    }

    openAddJobGroupDialog() {
        const dialog = this.editJobGroupDialog.open(JobGroupEditDialogComponent, {
            data: {
                isAdd: true,
                jobGroup: {
                    name: '',
                },
            },
        })

        dialog.afterClosed().subscribe(() => {
            this.requestData()
        })
    }

    openEditJobGroupDialog(jobGroup: JobGroupEntity) {
        const dialog = this.editJobGroupDialog.open(JobGroupEditDialogComponent, {
            data: {
                isAdd: false,
                jobGroup,
            },
        })

        dialog.afterClosed().subscribe(() => {
            this.requestData()
        })
    }

}
