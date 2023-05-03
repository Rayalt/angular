import { Component, OnInit } from '@angular/core';
import { menuItemCollection } from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part11',
	templateUrl: './part11.component.html',
	styles: [
	]
})
export class Part11Component implements OnInit {

	menuItemCollection = menuItemCollection;

	constructor() { }

	ngOnInit(): void {
	}

}
