import { Component } from '@angular/core';

@Component({
	selector: 'app-part2-one-way-binding',
	templateUrl: './one-way-binding.component.html',
})
export class OneWayBindingComponent {

	img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png';

	inputValue = '';

	constructor() {

		setTimeout(() => {
			console.log('Timeout');

			this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
		}, 5000)
	}

	onInput(event: KeyboardEvent): void {
		console.log('Event', event);
		this.inputValue = (<HTMLInputElement>event.target).value;
	}

	onInput2(event: any): void {
		console.log('Event', event);
		this.inputValue = event.target.value;
	}

	onBlur(str: string): void {
		this.inputValue = str;
	}

	onClick() {
		console.log('Click');
	}

}
