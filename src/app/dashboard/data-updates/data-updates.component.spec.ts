import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUpdatesComponent } from './data-updates.component';

describe('DataUpdatesComponent', () => {
  let component: DataUpdatesComponent;
  let fixture: ComponentFixture<DataUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
