import {Component, OnInit} from '@angular/core';
import {menuItemCollection} from 'src/app/shared/menu/menu-items.enum';

@Component({
	selector: 'app-part5',
	templateUrl: './part5.component.html',
	styles: []
})
export class Part5Component implements OnInit {

	constructor() {
	}

	menuItemCollection = menuItemCollection;

	ngOnInit(): void {
	}

}
