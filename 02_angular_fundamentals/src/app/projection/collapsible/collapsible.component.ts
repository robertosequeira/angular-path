import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
  @Input() title: string;
  public visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.visible = !this.visible;
  }
}
