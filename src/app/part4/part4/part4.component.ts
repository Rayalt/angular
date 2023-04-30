import { Component, OnInit } from '@angular/core';
import { menuItemCollection } from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part4',
	templateUrl: './part4.component.html',
	styles: [
	]
})
export class Part4Component implements OnInit {

	constructor() { }

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
