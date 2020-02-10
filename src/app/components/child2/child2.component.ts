import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Input() dataReceived: any;
  @Output() emitterChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getClass() {
    return this.dataReceived.class;
  }

  returnInfoToParent() {
    this.emitterChild.emit('Child info was emitted.');
  }

}
