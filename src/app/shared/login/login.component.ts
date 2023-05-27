import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../part9/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

	constructor(public auth: AuthService) {
	}

	ngOnInit(): void {
	}

}
