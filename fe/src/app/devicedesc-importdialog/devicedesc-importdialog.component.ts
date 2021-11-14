import {Component, EventEmitter, OnInit} from '@angular/core'
import {FileUploader} from 'ng2-file-upload'
import {NgClass, NgStyle} from '@angular/common'

const URL = '/api/upload/'
// const URL = 'http://127.0.0.1:4201/api/upload/'

@Component({
    selector: 'app-devicedesc-importdialog',
    templateUrl: './devicedesc-importdialog.component.html',
    styleUrls: ['./devicedesc-importdialog.component.css'],
})
export class DeviceDescImportDialogComponent implements OnInit {
    uploader: FileUploader
    hasBaseDropZoneOver: boolean
    response: string

    constructor() {
        this.uploader = new FileUploader({
            url: URL,

        })

        this.hasBaseDropZoneOver = false
        this.response = ''

        this.uploader.response.subscribe(res => this.response = res)
    }

    ngOnInit(): void {
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e
    }
}
