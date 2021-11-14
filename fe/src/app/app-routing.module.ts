import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {ClusterNodeComponent} from "./clusternode/clusternode.component";
import {DeviceDescComponent} from "./devicedesc/devicedesc.component";
import {ProxyComponent} from "./proxy/proxy.component";
import {TaskComponent} from "./task/task.component";
import {SettingsComponent} from "./settings/settings.component";
import {PageNotFoundComponent} from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'clusternode', component: ClusterNodeComponent},
    {path: 'devicedesc', component: DeviceDescComponent},
    {path: 'proxy', component: ProxyComponent},
    {path: 'task', component: TaskComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
