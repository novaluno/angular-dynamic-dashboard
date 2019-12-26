import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';

@Component({
  selector: 'app-data-updates',
  templateUrl: './data-updates.component.html',
  styleUrls: ['./data-updates.component.scss']
})
export class DataUpdatesComponent implements WidgetComponent, OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
