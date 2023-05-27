import {Component, OnInit} from '@angular/core';
import {menuItemCollection} from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part14',
	templateUrl: './part14.component.html',
})
export class Part14Component implements OnInit {

	menuItemCollection = menuItemCollection;
	constructor() { }

	ngOnInit(): void {
	}

}
