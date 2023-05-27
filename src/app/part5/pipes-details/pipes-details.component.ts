import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-part5-pipes-details',
	templateUrl: './pipes-details.component.html',
})
export class PipesDetailsComponent implements OnInit {

	e: number = Math.E;
	str: string = 'Оказывается, органический трафик попахивает безумием';
	date: Date = new Date();
	float: number = .42;
	obj = {
		a: 1,
		b: {
			c: 2,
			d: {
				e: 3,
				f: 4,
			},
		},
	};

	constructor() {
	}

	ngOnInit(): void {
	}

}
