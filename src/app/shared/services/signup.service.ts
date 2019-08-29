import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userCreated(user): Observable<boolean> {
    // wait for the response of the server that
    // user has been created

    const response = true;
    return of(response);
  }

  constructor() { }
}
