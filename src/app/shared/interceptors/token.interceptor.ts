import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {


  constructor(
    private authService: AuthService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request)
               .pipe(
                  tap(
                    (event: HttpEvent<any>) => {
                      if (event instanceof HttpResponse) {
                        // check for new token
                        if (event.body && event.body.token) {
                          this.authService.setToken(event.body.token);
                        }
                      }
                    },
                    (err) => {
                      if (err instanceof HttpErrorResponse && err.status === 401) {
                        this.authService.signOut();
                      }
                    }
                  )
                );
  }
}
