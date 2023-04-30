import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { menuItemCollection } from './shared/menu/menu-items.enum';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

	pageBody: any;
	menuItemCollection = menuItemCollection;

	constructor(
		private primengConfig: PrimeNGConfig,
	) {}

	ngOnInit() {
		this.pageBody = document.body;
		this.primengConfig.ripple = true;
	}

	openMenu() {
		this.pageBody.classList.add('open-nav');
	}

	closeMenu() {
		this.pageBody.classList.remove('open-nav');
	}
}
