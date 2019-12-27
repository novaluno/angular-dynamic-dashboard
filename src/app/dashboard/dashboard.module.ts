import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { DataUpdatesComponent } from './data-updates/data-updates.component';
import { WidgetHostDirective } from './widget-host.directive';
import { WidgetControllerComponent } from './widget-controller/widget-controller.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { WidgetEditorComponent } from './widget-editor/widget-editor.component';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    DashboardComponent,
    NewsUpdatesComponent,
    DataUpdatesComponent,
    WidgetHostDirective,
    WidgetControllerComponent,
    AreaChartComponent,
    ProductsGridComponent,
    WidgetEditorComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    ChartsModule,
    GridModule,
    ToolBarModule,
    DashboardRoutingModule
  ],
  entryComponents: [
    NewsUpdatesComponent,
    DataUpdatesComponent,
    AreaChartComponent,
    ProductsGridComponent
  ],
})
export class DashboardModule { }
