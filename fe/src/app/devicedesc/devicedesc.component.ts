import {Component, OnInit} from '@angular/core'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'

import {DeviceDescStatDialogComponent} from '../devicedesc-statdialog/devicedesc-statdialog.component'
import {DeviceDescImportDialogComponent} from '../devicedesc-importdialog/devicedesc-importdialog.component'

@Component({
    selector: 'app-devicedesc',
    templateUrl: './devicedesc.component.html',
    styleUrls: ['./devicedesc.component.css'],
})
export class DeviceDescComponent implements OnInit {

    constructor(
        public statDialog: MatDialog,
        public importDialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    openGroupStatDialog() {
        const dialog = this.statDialog.open(DeviceDescStatDialogComponent)
    }

    openImportDialog() {
        const dialog = this.importDialog.open(DeviceDescImportDialogComponent)
    }

}
