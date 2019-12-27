import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-data-updates',
  templateUrl: './data-updates.component.html',
  styleUrls: ['./data-updates.component.scss']
})
export class DataUpdatesComponent implements WidgetComponent, OnInit {

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
