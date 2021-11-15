import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {DeviceDescEntity} from '../../interfaces/devicedesc'

@Component({
    selector: 'app-devicedesc-detailsdialog',
    templateUrl: './devicedesc-detailsdialog.component.html',
    styleUrls: ['./devicedesc-detailsdialog.component.css'],
})
export class DeviceDescDetailsDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DeviceDescDetailsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DeviceDescEntity,
    ) {
    }

    ngOnInit(): void {
    }

}
