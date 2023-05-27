import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root',
})

export class AuthService {
	isAuth: boolean = false;

	login() {
		this.isAuth = true;
		console.log('login');
	}

	logout() {
		this.isAuth = false;
		console.log('logout');
	}

	isAuthenticated(): Promise<boolean> {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(this.isAuth);
			}, 1000);
		});
	}

}
