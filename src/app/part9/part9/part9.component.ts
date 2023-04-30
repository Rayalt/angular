import { Component, OnInit } from '@angular/core';
import { menuItemCollection } from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part9',
	templateUrl: './part9.component.html',
})
export class Part9Component implements OnInit {

	constructor() { }

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
