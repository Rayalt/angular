import {Component, OnInit} from '@angular/core';
import {menuItemCollection} from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part12',
	templateUrl: './part12.component.html',
})
export class Part12Component implements OnInit {

	menuItemCollection = menuItemCollection;

	constructor() {
	}

	ngOnInit(): void {
	}

}
