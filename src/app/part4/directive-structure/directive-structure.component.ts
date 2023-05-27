import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-part4-directive-structure',
	templateUrl: './directive-structure.component.html',
})
export class DirectiveStructureComponent implements OnInit {

	@Input() isVisible: boolean = true;

	constructor() {
	}

	ngOnInit(): void {
	}

}
