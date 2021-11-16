import {Component, Input, OnInit} from '@angular/core'
import {JobIconInfo} from '../job-panel/job.component'
import {JobService} from '../../services/job.service'

@Component({
    selector: 'app-job-icon',
    templateUrl: './job-icon.component.html',
    styleUrls: ['./job-icon.component.css'],
})
export class JobIconComponent implements OnInit {

    @Input() jobIcon: JobIconInfo

    constructor(
        private jobService: JobService,
    ) {
    }

    ngOnInit(): void {
    }

    onLaunchButtonClick($event: Event) {
        $event.stopPropagation()

        this.jobService.play(this.jobIcon.jobEntity!).subscribe(e => e)
    }
}
