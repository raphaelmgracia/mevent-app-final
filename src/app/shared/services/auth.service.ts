import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, tap, catchError, map, distinct } from 'rxjs/operators';
import { IUserResponse } from '../models/user/user.response';
import { IUser } from '../models/user/user';
import { ToastService } from './toast.service';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BACKEND_URL = 'http://localhost:8080/api/v1/';
  private token: string = null;

  private authUser = new BehaviorSubject<IUser>(null);
  public authUser$ = this.authUser.asObservable();

  constructor(
    private http: HttpClient,
    private errorService: ToastService,
    private storage: Storage
  ) {
    this.storage
        .get('token')
        .then(token => {
          this.token = token;
          if (token) {
            this.whoAmI();
          }
        })
        .catch(err => console.error(err));
  }

  public signIn(credentials: { email: string; password: string; }) {
    this.http
        .post<IUserResponse>(`${this.BACKEND_URL}auth/signin`, credentials)
        .pipe(
          map(response => {
            if (response && response.error === true) {
              throw response;
            }
            return response.user;
          }),
          tap(user => {
            this.authUser.next(user);
          }),
          catchError((err: any) => {
            console.error(err);
            let msg = err ? err.toString() : 'Unknow error';
            if (err instanceof HttpErrorResponse) {
              if (err.error && err.error.message) {
                msg = err.error.message;
              }
              else {
                msg = err.statusText;
              }
            }
            else if (err && err.message) {
              msg = err.message;
            }
            this.errorService.setError(msg);
            return of();
          }),
          take(1),
        )
        .subscribe();
  }

  public signOut() {
    this.setToken(null);
    this.authUser.next(null);
  }

  public isAuthenticated() {
    try {
      const isAuth = this.token && !new JwtHelperService().isTokenExpired(this.token);
      if (!isAuth) {
        this.signOut();
      }
      return isAuth;
    }
    catch (e) {
      this.signOut();
      return false;
    }
  }

  private whoAmI() {
    this.http
        .get<IUserResponse>(`${this.BACKEND_URL}auth/whoami`)
        .pipe(
          map(response => {
            if (response && response.error === true) {
              throw response;
            }
            return response.user;
          }),
          tap(user => {
            this.authUser.next(user);
          }),
        ).subscribe();
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string) {
    this.token = token;
    if (!token) {
      this.authUser.next(null);
    }
    this.storage.set('token', token)
        .then(() => {})
        .catch(err => console.error(err));
  }
}
