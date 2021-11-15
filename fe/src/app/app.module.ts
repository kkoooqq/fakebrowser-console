import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule} from '@angular/forms'

// materials
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog'
import {MatTableModule} from '@angular/material/table'
import {MatTabsModule} from '@angular/material/tabs'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

// 3party
import {FileUploadModule} from 'ng2-file-upload'

// modules
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LoginComponent} from './components/login-panel/login.component'
import {NavComponent} from './components/nav-panel/nav.component'
import {DashboardComponent} from './components/dashboard-panel/dashboard.component'
import {ClusterNodeComponent} from './components/clusternode/clusternode.component'
import {ProxyComponent} from './components/proxy-panel/proxy.component'
import {JobComponent} from './components/job-panel/job.component'
import {SettingsComponent} from './components/settings-panel/settings.component'
import {PageNotFoundComponent} from './components/pagenotfound/pagenotfound.component'
import {ControlpanelComponent} from './components/controlpanel/controlpanel.component'

import {DeviceDescComponent} from './components/devicedesc-panel/devicedesc.component'
import {DeviceDescStatDialogComponent} from './components/devicedesc-statdialog/devicedesc-statdialog.component'
import {DeviceDescImportDialogComponent} from './components/devicedesc-importdialog/devicedesc-importdialog.component'
import {DeviceDescDetailsDialogComponent} from './components/devicedesc-detailsdialog/devicedesc-detailsdialog.component'

import {JobGroupManageDialogComponent} from './components/jobgroup-managedialog/jobgroup-managedialog.component'
import {JobGroupEditDialogComponent} from './components/jobgroup-editdialog/jobgroup-editdialog.component'

import {JobEditDialogComponent} from './components/job-editdialog/job-editdialog.component'
import {JobIconComponent} from './components/job-icon/job-icon.component'

// services
import {DeviceDescService} from './services/devicedesc.service'
import {DeviceDescGroupService} from './services/devicedesc-group.service'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent,
        DashboardComponent,
        ClusterNodeComponent,
        DeviceDescComponent,
        ProxyComponent,
        JobComponent,
        SettingsComponent,
        PageNotFoundComponent,
        ControlpanelComponent,
        DeviceDescStatDialogComponent,
        DeviceDescImportDialogComponent,
        DeviceDescDetailsDialogComponent,
        JobGroupManageDialogComponent,
        JobGroupEditDialogComponent,
        JobEditDialogComponent,
        JobIconComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatSortModule,
        MatTabsModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FileUploadModule,
    ],
    providers: [
        DeviceDescService,
        DeviceDescGroupService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
