import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { WidgetItem } from '../models/widget-item';
import { WidgetHostDirective } from '../widget-host.directive';
import { WidgetComponent } from '../models/widget-component';

@Component({
  selector: 'app-widget-controller',
  templateUrl: './widget-controller.component.html',
  styleUrls: ['./widget-controller.component.scss']
})
export class WidgetControllerComponent implements OnInit, OnDestroy {

  @Input() widgets: WidgetItem[];
  currentWidgetIndex = -1;
  @ViewChild(WidgetHostDirective, { static: true }) widgetHost: WidgetHostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponents();
    this.getWidgets();
  }

  ngOnDestroy() {
  }

  loadComponents() {

    this.currentWidgetIndex = (this.currentWidgetIndex + 1) % this.widgets.length;

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.widgets.length; index++) {

      const widgetItem = this.widgets[index];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widgetItem.component);

      const viewContainerRef = this.widgetHost.viewContainerRef;

      const componentRef = viewContainerRef.createComponent(componentFactory);

      (componentRef.instance as WidgetComponent).data = widgetItem.data;
    }
  }

  getWidgets() {

    const viewContainerRef = this.widgetHost.viewContainerRef;
    viewContainerRef.clear();

    this.loadComponents();
  }
}
