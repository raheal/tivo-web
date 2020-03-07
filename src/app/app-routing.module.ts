import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent} from './active/active.component';
import { HistoryComponent } from './history/history.component';
import { DownloadComponent } from './download/download.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  {path : 'download', component : DownloadComponent},
  {path : 'history', component : HistoryComponent},
  {path : 'active', component : ActiveComponent},
  {path : 'status', component : StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
