import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {AuthService} from '../../part9/auth/auth.service';
import {menuItemCollection, menuItemSeparateCollection} from './menu-items.enum';
import {menuAnimation} from './menu.animations';

@Component({
	selector: 'app-shared-menu',
	templateUrl: './menu.component.html',
	animations: [
		menuAnimation,
	],
})
export class MenuComponent implements OnInit {

	@HostBinding('class')
	openMenuClass: string = 'open-nav';

	isMenuOpen: boolean = false;
	menuItemCollection = menuItemCollection;

	menuItemSeparateCollection = menuItemSeparateCollection;
	private skipClick: boolean = false;

	constructor(public auth: AuthService) {
	}

	ngOnInit() {
	}

	// @HostListener('click', ['$event'])
	// hostClick(event: Event) {
	// 	// event.stopPropagation();
	// }

	openMenu() {
		this.skipClick = true;
		this.isMenuOpen = true;
		this.openMenuClass = 'open-nav';
	}

	@HostListener('window:click')
	closeMenu() {
		if (this.skipClick) {
			this.skipClick = false;

			return;
		}

		this.isMenuOpen = false;
		this.openMenuClass = '';
	} // подписка на window:click один раз
}
