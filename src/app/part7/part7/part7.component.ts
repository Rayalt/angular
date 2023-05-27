import {Component, OnInit} from '@angular/core';
import {menuItemCollection} from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part7',
	templateUrl: './part7.component.html',
	styles: []
})
export class Part7Component implements OnInit {

	constructor() {
	}

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
