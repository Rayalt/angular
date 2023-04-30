import { Component, OnInit } from '@angular/core';
import { menuItemCollection } from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part8',
	templateUrl: './part8.component.html',
	styles: [
	]
})
export class Part8Component implements OnInit {

	constructor() { }

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
