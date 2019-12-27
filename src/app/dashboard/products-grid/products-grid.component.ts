import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';

import { products } from './products';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements WidgetComponent, OnInit {

  @Input() data: any;

  showWidgetEditor = false;

  public gridData: any[] = products;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.widgetEditMode.subscribe((showWidgetEditor: boolean) => {
      this.showWidgetEditor = showWidgetEditor;
    });
  }
}
