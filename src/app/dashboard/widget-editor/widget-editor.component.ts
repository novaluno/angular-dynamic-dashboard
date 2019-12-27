import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-editor',
  templateUrl: './widget-editor.component.html',
  styleUrls: ['./widget-editor.component.scss']
})
export class WidgetEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moveUp(e) {
    e.preventDefault();
    console.log('moveUp');
  }

  moveDown(e) {
    e.preventDefault();
    console.log('moveDown');
  }

  insertBefore(e) {
    e.preventDefault();
    console.log('insertBefore');
  }

  insertAfter(e) {
    e.preventDefault();
    console.log('insertAfter');
  }

  remove(e) {
    e.preventDefault();
    console.log('remove');
  }
}
