import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    public loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token_id = localStorage.getItem("token_id")
    this.loadingService.isLoading.next(true)
    if(token_id) {
      const clone = request.clone({
        setHeaders: {
          "Authorization": "Bearer " + token_id
        }
      })
      return next.handle(clone)
    } else {
      return next.handle(request).pipe(finalize(() => {
        this.loadingService.isLoading.next(false)
      }))
    }
  }
}
