import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';

import { products } from './products';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements WidgetComponent, OnInit {

  @Input() data: any;

  public gridData: any[] = products;

  constructor() { }

  ngOnInit() {
  }
}
