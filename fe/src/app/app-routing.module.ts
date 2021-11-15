import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./components/dashboard-panel/dashboard.component";
import {ClusterNodeComponent} from "./components/clusternode/clusternode.component";
import {DeviceDescComponent} from "./components/devicedesc-panel/devicedesc.component";
import {ProxyComponent} from "./components/proxy-panel/proxy.component";
import {JobComponent} from "./components/job-panel/job.component";
import {SettingsComponent} from "./components/settings-panel/settings.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'clusternode', component: ClusterNodeComponent},
    {path: 'devicedesc', component: DeviceDescComponent},
    {path: 'proxy', component: ProxyComponent},
    {path: 'job', component: JobComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
