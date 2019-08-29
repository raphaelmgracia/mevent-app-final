import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  private authUser = new BehaviorSubject(null);
  public authUser$: Observable<any> = this.authUser.asObservable();

  userIsIn(user): Observable<boolean> {
    // fetch authentication api with user details
    // then return the response
    const response = true;
    return of(response);
  }



  constructor() { }
}
