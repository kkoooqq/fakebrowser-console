import {AfterViewInit, Component, OnInit} from '@angular/core'
import {JobGroupEntity} from '../../interfaces/jobgroup'
import {JobGroupService} from '../../services/jobgroup.service'

@Component({
    selector: 'app-jobgroup-managedialog',
    templateUrl: './jobgroup-managedialog.component.html',
    styleUrls: ['./jobgroup-managedialog.component.css'],
})
export class JobGroupManageDialogComponent implements OnInit, AfterViewInit {

    dataSource: JobGroupEntity[]
    displayColumn = ['id', 'name']

    constructor(
        private readonly jobGroupService: JobGroupService,
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.jobGroupService.getAll().subscribe((jobGroups) => {
            this.dataSource = jobGroups
        })
    }

}
