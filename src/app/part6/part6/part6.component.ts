import {Component, OnInit} from '@angular/core';
import {menuItemCollection} from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part6',
	templateUrl: './part6.component.html',
	styles: []
})
export class Part6Component implements OnInit {

	constructor() {
	}

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
