import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent {
  public visible = false;

  constructor() { }

  toggle(): void {
    this.visible = !this.visible;
  }
}
