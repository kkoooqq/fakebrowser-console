import {AfterViewInit, Component, OnInit} from '@angular/core'
import {JobGroupEntity} from '../../interfaces/jobgroup'
import {JobGroupService} from '../../services/jobgroup.service'

@Component({
    selector: 'app-jobgroup-managedialog',
    templateUrl: './jobgroup-editdialog.component.html',
    styleUrls: ['./jobgroup-editdialog.component.css'],
})
export class JobGroupEditDialogComponent implements OnInit, AfterViewInit {

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
