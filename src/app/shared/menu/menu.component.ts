import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

	menuLength: number = 18;

	pageBody: any;

	constructor() { }

	ngOnInit() {
		this.pageBody = document.body;
	}

	closeMenu() {
		this.pageBody.classList.remove('open-nav');
	}
}
