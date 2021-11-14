import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// materials
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClusternodeComponent} from './clusternode/clusternode.component';
import {DeviceDescComponent} from './devicedesc/devicedesc.component';
import {ProxyComponent} from './proxy/proxy.component';
import {TaskComponent} from './task/task.component';
import {SettingsComponent} from './settings/settings.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SidebarComponent,
        DashboardComponent,
        ClusternodeComponent,
        DeviceDescComponent,
        ProxyComponent,
        TaskComponent,
        SettingsComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
