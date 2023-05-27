import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-part11-dynamic',
	templateUrl: './dynamic.component.html',
})
export class DynamicComponent implements OnInit {

	@Input() title: string = 'Default Title';
	@Input() ngModalClass: string = '';
	@Output() close = new EventEmitter<void>();

	modal: boolean = false;

	constructor() {
	}

	ngOnInit(): void {
	}

}
