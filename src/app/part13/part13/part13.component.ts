import {Component, OnInit} from '@angular/core';
import {menuItemCollection} from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part13',
	templateUrl: './part13.component.html',
})
export class Part13Component implements OnInit {

	menuItemCollection = menuItemCollection;

	constructor() {
	}

	ngOnInit(): void {
	}

}
