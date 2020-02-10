import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
    public dataSent = {
        text: '',
        class: ''
    };

    constructor() {}

    redAction() {
        this.dataSent = {
            text: 'This is the result when you click RED button.',
            class: 'red-class'
        };
    }

    blueAction() {
        this.dataSent = {
            text: 'You can also have this result when clicking the BLUE button.',
            class: 'blue-class'
        };
    }

}
