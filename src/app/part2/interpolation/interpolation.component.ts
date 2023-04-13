import { Component } from '@angular/core';

@Component({
	selector: 'app-part2-interpolation',
	templateUrl: './interpolation.component.html',
})
export class InterpolationComponent {
	title = 'Dynamic Title';

	number = 42;

	arr = [1, 2, 3];

	obj = {
		a: 1,
		b: {
			c: 2,
		},
	};
}
