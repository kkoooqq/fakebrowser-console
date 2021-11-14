import {Component, EventEmitter, OnInit} from '@angular/core'
import {FileUploader} from 'ng2-file-upload'

// const URL = '/upload/'
const URL = 'http://127.0.0.1:4201/upload/'

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
            disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
            formatDataFunctionIsAsync: true,
            formatDataFunction: async (item: any) => {
                return new Promise((resolve, reject) => {
                    resolve({
                        name: item._file.name,
                        length: item._file.size,
                        contentType: item._file.type,
                        date: new Date(),
                    })
                })
            },
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
