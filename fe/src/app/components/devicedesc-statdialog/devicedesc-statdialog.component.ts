import {AfterViewInit, Component, OnInit} from '@angular/core'
import {MatTableDataSource} from '@angular/material/table'
import {DeviceDescGroupService} from '../../services/devicedesc-group.service'
import {DeviceDescGroupEntity} from '../../interfaces/devicedesc-group'

const kGroupStatArray: DeviceDescGroupEntity[] = [{
    name: 'Windows',
    count: 0,
}, {
    name: 'macOS',
    count: 0,
}, {
    name: 'Linux',
    count: 0,
}, {
    name: 'iPhone',
    count: 0,
}, {
    name: 'iPad',
    count: 0,
}, {
    name: 'Android',
    count: 0,
}]

@Component({
    selector: 'app-devicedesc-statdialog',
    templateUrl: './devicedesc-statdialog.component.html',
    styleUrls: ['./devicedesc-statdialog.component.css'],
})
export class DeviceDescStatDialogComponent implements OnInit, AfterViewInit {

    dataSource = new MatTableDataSource(kGroupStatArray)

    constructor(
        private readonly deviceDescGroupService: DeviceDescGroupService,
    ) {
    }

    ngOnInit(): void {
        this.deviceDescGroupService.getAll().subscribe((ddGroups) => {
            this.dataSource = new MatTableDataSource(ddGroups)
        })
    }

    ngAfterViewInit() {
    }

}
