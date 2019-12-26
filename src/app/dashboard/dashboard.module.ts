import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { DataUpdatesComponent } from './data-updates/data-updates.component';


@NgModule({
  declarations: [DashboardComponent, NewsUpdatesComponent, DataUpdatesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
