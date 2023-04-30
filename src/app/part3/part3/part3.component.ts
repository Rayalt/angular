import { Component, OnInit } from '@angular/core';
import { menuItemCollection } from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part3',
	templateUrl: './part3.component.html',
	styles: [
	]
})
export class Part3Component implements OnInit {

	constructor() { }

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
