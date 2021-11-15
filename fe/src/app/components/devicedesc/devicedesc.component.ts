import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatPaginator} from '@angular/material/paginator'
import {MatTableDataSource} from '@angular/material/table'
import {MatSort} from '@angular/material/sort'
import {merge, Observable, of as observableOf} from 'rxjs'
import {catchError, map, startWith, switchMap} from 'rxjs/operators'

import {DeviceDescService} from '../../services/devicedesc.service'
import {DeviceDescStatDialogComponent} from '../devicedesc-statdialog/devicedesc-statdialog.component'
import {DeviceDescImportDialogComponent} from '../devicedesc-importdialog/devicedesc-importdialog.component'
import {DeviceDescEntity} from '../../interfaces/devicedesc'

@Component({
    selector: 'app-devicedesc',
    templateUrl: './devicedesc.component.html',
    styleUrls: ['./devicedesc.component.css'],
})
export class DeviceDescComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['id', 'platform', 'userAgent', 'screen_width', 'screen_height', 'languages']
    data: DeviceDescEntity[] = []
    resultsLength = 0
    isLoadingResults = true
    @ViewChild(MatPaginator) paginator: MatPaginator

    constructor(
        private deviceDescService: DeviceDescService,
        public statDialog: MatDialog,
        public importDialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true
                    return this.deviceDescService.getByPage(
                        this.paginator.pageIndex,
                        this.paginator.pageSize,
                    )
                }),
                map(data => {
                    this.isLoadingResults = false
                    this.resultsLength = data[1];
                    return data
                }),
                catchError(() => {
                    this.isLoadingResults = false
                    return observableOf([])
                }),
            ).subscribe(data => this.data = data[0])
    }

    openGroupStatDialog() {
        const dialog = this.statDialog.open(DeviceDescStatDialogComponent)
    }

    openImportDialog() {
        const dialog = this.importDialog.open(DeviceDescImportDialogComponent)
    }

}
