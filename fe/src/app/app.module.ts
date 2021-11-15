import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

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

// 3party
import {FileUploadModule} from 'ng2-file-upload'

// modules
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LoginComponent} from './components/login/login.component'
import {NavComponent} from './components/nav/nav.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {ClusterNodeComponent} from './components/clusternode/clusternode.component'
import {DeviceDescComponent} from './components/devicedesc/devicedesc.component'
import {ProxyComponent} from './components/proxy/proxy.component'
import {JobComponent} from './components/job/job.component'
import {SettingsComponent} from './components/settings/settings.component'
import {PageNotFoundComponent} from './components/pagenotfound/pagenotfound.component'
import {ControlpanelComponent} from './components/controlpanel/controlpanel.component'
import {DeviceDescStatDialogComponent} from './components/devicedesc-statdialog/devicedesc-statdialog.component'
import {DeviceDescImportDialogComponent} from './components/devicedesc-importdialog/devicedesc-importdialog.component'

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
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
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
