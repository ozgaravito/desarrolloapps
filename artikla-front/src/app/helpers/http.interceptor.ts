import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ResponseInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({ headers: request.headers.set('content-type', 'application/json') });
        
        return next.handle(request).pipe(
            map((respuesta : HttpEvent<any>) => {
                if (respuesta instanceof HttpResponse && respuesta.ok) {
                    console.log('Respuesta--->>>', respuesta);
                }
                return respuesta;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                // if(error.status === ERROR_MESSAGES.INVALID_TOKEN.cod) {
                //     return throwError(ERROR_MESSAGES.INVALID_TOKEN.cod); //Token incorrecto
                // }
                //var msg = (/true/i).test(error.error.ExceptionMessage);
                if(error.error.ExceptionMessage && error.error.InnerException)
                    return throwError([error.error.ExceptionMessage]);
                
                // let mensaje = defMensaje(ERROR_MESSAGES, error.status);
                return throwError([error]); // Lanzar mensaje de error
        }));
    }
}