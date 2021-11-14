import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'

import {MatSort} from '@angular/material/sort'
import {MatTableDataSource} from '@angular/material/table'

export interface DeviceDescStat {
    name: string,
    count: number,
}

const kGroupStatArray: DeviceDescStat[] = [{
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

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

}
