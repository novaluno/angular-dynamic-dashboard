import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public widgetEditMode = new Subject();

  constructor() { }

  setWidgetEditMode(showEditor: boolean) {
    this.widgetEditMode.next(showEditor);
  }
}
