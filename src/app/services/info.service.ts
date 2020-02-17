import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  getInfo(): Observable<any>{
    return new Observable(observer => {
      setTimeout(() => {
        observer.next('This is a GET method.')    
      }, 3000);
    })
  }

  postInfo(): Observable<string> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next('This is a POST method.')    
      }, 3000);
    })
  }
}
