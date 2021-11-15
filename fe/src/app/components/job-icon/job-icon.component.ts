import {Component, Input, OnInit} from '@angular/core'
import {JobIconInfo} from '../job-panel/job.component'

@Component({
    selector: 'app-job-icon',
    templateUrl: './job-icon.component.html',
    styleUrls: ['./job-icon.component.css'],
})
export class JobIconComponent implements OnInit {

    @Input() jobIcon: JobIconInfo

    constructor() {
    }

    ngOnInit(): void {
    }

}
