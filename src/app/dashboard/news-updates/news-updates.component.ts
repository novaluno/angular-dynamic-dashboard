import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.scss']
})
export class NewsUpdatesComponent implements WidgetComponent, OnInit {

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
