import { Component } from '@angular/core';

@Component({
	selector: 'app-part2-two-way-binding',
	templateUrl: './two-way-binding.component.html',
})
export class TwoWayBindingComponent {

	inputTitle = 'inputTitle';

	onInput3(event: any) {
		this.inputTitle = event.target.value;
	}

}
