import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {

  public data = {};

  public labelReceived: string;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      class: '',
      text: 'Just created the component.',
      hiddenInfo: 'a',
      iterableData : [
        '1', '2', '3', '444444444'
      ]
    }
  }

  redAction() {
    this.data = {
      class: 'red-class',
      text: 'This is the result of the red button click.',
      hiddenInfo: 'b',
      iterableData : [
        '1', '2', '3', '444444444'
      ]
    }
  }

  blueAction() {
    this.data = {
      class: 'blue-class',
      text: 'But you can change it to blu action button.',
      hiddenInfo: 'a',
      iterableData : [
        '1', '2', '3', '444444444'
      ]
    }
  }

  receiveDataFromChild(event) {
    this.labelReceived = event;
  }

}
