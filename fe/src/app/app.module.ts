import {NgModule} from '@angular/core'
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

// import {NgxUploaderModule} from 'ngx-uploader'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {LoginComponent} from './login/login.component'
import {NavComponent} from './nav/nav.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {ClusterNodeComponent} from './clusternode/clusternode.component'
import {DeviceDescComponent} from './devicedesc/devicedesc.component'
import {ProxyComponent} from './proxy/proxy.component'
import {TaskComponent} from './task/task.component'
import {SettingsComponent} from './settings/settings.component'
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component'
import {ControlpanelComponent} from './controlpanel/controlpanel.component'
import {DeviceDescStatDialogComponent} from './devicedesc-statdialog/devicedesc-statdialog.component'
import {DeviceDescImportDialogComponent} from './devicedesc-importdialog/devicedesc-importdialog.component'
import {MatSortModule} from '@angular/material/sort'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavComponent,
        DashboardComponent,
        ClusterNodeComponent,
        DeviceDescComponent,
        ProxyComponent,
        TaskComponent,
        SettingsComponent,
        PageNotFoundComponent,
        ControlpanelComponent,
        DeviceDescStatDialogComponent,
        DeviceDescImportDialogComponent,
    ],
    imports: [
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
        // NgxUploaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
