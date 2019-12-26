import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { DataUpdatesComponent } from './data-updates/data-updates.component';
import { WidgetHostDirective } from './widget-host.directive';
import { WidgetControllerComponent } from './widget-controller/widget-controller.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NewsUpdatesComponent,
    DataUpdatesComponent,
    WidgetHostDirective,
    WidgetControllerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  entryComponents: [
    NewsUpdatesComponent,
    DataUpdatesComponent
  ],
})
export class DashboardModule { }
