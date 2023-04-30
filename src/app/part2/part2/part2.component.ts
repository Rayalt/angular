import { Component, OnInit } from '@angular/core';
import { menuItemCollection } from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part2',
	templateUrl: './part2.component.html',
	styles: [
	]
})
export class Part2Component implements OnInit {

	constructor() { }

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
