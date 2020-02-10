import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() dataReceived: any;

  constructor() {}

  ngOnInit() {
    this.dataReceived = {
      text: 'Component just created.',
      class: ''
    }
  }

  getClass() {
    return this.dataReceived.class;
  }

}
