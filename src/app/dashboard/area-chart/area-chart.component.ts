import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements WidgetComponent, OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
