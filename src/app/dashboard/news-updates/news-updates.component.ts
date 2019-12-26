import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../models/widget-component';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.scss']
})
export class NewsUpdatesComponent implements WidgetComponent, OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
