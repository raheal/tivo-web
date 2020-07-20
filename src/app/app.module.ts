import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DownloadComponent } from './download/download.component';
import { HistoryComponent } from './history/history.component';
import { ActiveComponent } from './active/active.component';
import  {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { StatusPipe } from './status.pipe';
import { StatusComponent } from './status/status.component';
import { LogPipe } from './log.pipe';
import { FormsModule } from '@angular/forms';
import { DownloadModalComponent } from './download-modal/download-modal.component';
import { ChartsModule } from 'ng2-charts';
import { ExplorerComponent } from './explorer/explorer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TruncatePipe } from './truncate.pipe';
import { FeatureDisabledModalComponent } from './feature-disabled-modal/feature-disabled-modal.component';
import { StatusFilterPipe } from './status-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DownloadComponent,
    HistoryComponent,
    ActiveComponent,
    FooterComponent,
    StatusPipe,
    StatusComponent,
    LogPipe,
    DownloadModalComponent,
    ExplorerComponent,
    DashboardComponent,
    TruncatePipe,
    FeatureDisabledModalComponent,
    StatusFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
