import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token_id = localStorage.getItem("token_id")
    if(token_id) {
      const clone = request.clone({
        setHeaders: {
          "Authorization": "Bearer " + token_id
        }
      })
      return next.handle(clone)
    } else {
      return next.handle(request);
    }
  }
}
