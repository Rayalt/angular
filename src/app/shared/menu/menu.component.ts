import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../part9/auth/auth.service";
import {menuItemCollection, menuItemSeparateCollection} from "./menu-items.enum";

@Component({
	selector: 'app-shared-menu',
	templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
	menuLength: number = 18;

	pageBody: any;

	menuItemCollection = menuItemCollection;
	menuItemSeparateCollection = menuItemSeparateCollection;

	constructor(public auth: AuthService) {
	}

	ngOnInit() {
		this.pageBody = document.body;
	}

	closeMenu() {
		this.pageBody.classList.remove('open-nav');
	}
}
