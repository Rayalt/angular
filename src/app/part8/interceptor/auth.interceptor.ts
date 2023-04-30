import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('InterceptReq:', req);

		const cloned = req.clone({
			headers: req.headers.append('AuthHeader', 'SOME RANDOM TOKEN'),
		});

		return next.handle(req).pipe(
			tap(event => {
				if (event.type === HttpEventType.Response) {
					console.log('InterceptorResponse:', event);
				}
			})
		);
	}
}
