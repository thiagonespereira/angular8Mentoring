import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './components/pages/page2/page2.component';
import { Page1Component } from './components/pages/page1/page1.component';


const routes: Routes = [
  { path: 'page2', component: Page2Component },
  { path: 'page1', component: Page1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
