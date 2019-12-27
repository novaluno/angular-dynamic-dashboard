import { Component, OnInit } from '@angular/core';
import { WidgetItem } from './models/widget-item';
import { WidgetService } from './widget.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';

  widgets: WidgetItem[];

  showWidgetEditor = false;

  constructor(
    private widgetService: WidgetService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.widgets = this.widgetService.getWidgets();
    this.dashboardService.setWidgetEditMode(true);
  }

  editDashboard(e) {
    e.preventDefault();
    console.log('editDashboard');
    this.showWidgetEditor = true;
    this.dashboardService.setWidgetEditMode(true);
  }

  cancelChanges(e) {
    e.preventDefault();
    console.log('cancelChanges');
    this.showWidgetEditor = false;
    this.dashboardService.setWidgetEditMode(false);
  }

  saveChanges(e) {
    e.preventDefault();
    console.log('saveChanges');
    this.showWidgetEditor = false;
    this.dashboardService.setWidgetEditMode(false);
  }
}
