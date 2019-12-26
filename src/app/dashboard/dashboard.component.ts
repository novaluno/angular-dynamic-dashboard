import { Component, OnInit } from '@angular/core';
import { WidgetItem } from './models/widget-item';
import { WidgetService } from './widget.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';

  widgets: WidgetItem[];

  constructor(
    private widgetService: WidgetService
  ) { }

  ngOnInit() {
    this.widgets = this.widgetService.getWidgets();
  }

}
