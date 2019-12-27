import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements WidgetComponent, OnInit {

  @Input() data: any;

  showWidgetEditor = false;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.widgetEditMode.subscribe((showWidgetEditor: boolean) => {
      this.showWidgetEditor = showWidgetEditor;
    });
  }

}
