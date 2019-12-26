import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetControllerComponent } from './widget-controller.component';

describe('WidgetControllerComponent', () => {
  let component: WidgetControllerComponent;
  let fixture: ComponentFixture<WidgetControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
