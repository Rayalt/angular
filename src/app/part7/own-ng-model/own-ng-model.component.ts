import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-part7-own-ng-model',
	templateUrl: './own-ng-model.component.html',
})
export class OwnNgModelComponent implements OnInit {

	appState: string = 'on';

	constructor() {
	}

	ngOnInit(): void {
	}

	handleChange() {
		console.log('(ngModelChange):', this.appState);
	}
}
