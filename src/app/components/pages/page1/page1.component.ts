import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage2() {
    this.router.navigate(['/page2']);
  }

}
