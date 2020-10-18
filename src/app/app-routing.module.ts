import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent} from './tivo/active/active.component';
import { HistoryComponent } from './tivo/history/history.component';
import { DownloadComponent } from './tivo/download/download.component';
import { StatusComponent } from './tivo/status/status.component';
import { DashboardComponent } from './tivo/dashboard/dashboard.component';


const routes: Routes = [
  {path : 'download', component : DownloadComponent},
  {path : 'history', component : HistoryComponent},
  {path : 'active', component : ActiveComponent},
  {path : 'dashboard', component : DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
