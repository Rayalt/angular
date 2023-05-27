import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {menuItemCollection} from './shared/menu/menu-items.enum';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
	menuItemCollection = menuItemCollection;

	constructor() {
	}

	ngOnInit() {
	}
}
