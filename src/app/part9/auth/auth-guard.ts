import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot,} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable({
	providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(
		private autService: AuthService,
		private router: Router,
	) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.autService.isAuthenticated().then(isAuth => {
			if (isAuth) {
				return true;
			} else {
				this.router.navigate(['/login'], {
					queryParams: {
						auth: false,
					}
				});
				return false;
			}
		});
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(route, state);
	}
}
