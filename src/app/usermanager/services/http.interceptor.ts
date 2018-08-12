import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
 
import { ErrorHandler } from './error.handler';
 
@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(public errorHandler : ErrorHandler) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {    

    return next
        .handle(request)
        .pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        this.errorHandler.handleError(err);
                    }}
            )
        );
  }
}