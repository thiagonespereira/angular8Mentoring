import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit, OnDestroy {

  public data = {};

  public labelReceived: string;
  public responseLabel: string;
  private sub: Subscription;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.responseLabel = "No response yet."
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

  get() {
    this.sub = this.infoService.getInfo()
    .subscribe(data => {
      this.responseLabel = data;
    })
  }

  post() {
    this.infoService.postInfo()
    .toPromise()
    .then((data) => {
      this.responseLabel = data;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
