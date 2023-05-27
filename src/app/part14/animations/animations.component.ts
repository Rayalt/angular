import {Component} from '@angular/core';
import {AnimationEvent} from '@angular/animations';
import {bounceAnimation, boxAnimation, boxAnimation2, boxAnimation3} from './animations.animations';

@Component({
	selector: 'app-part14-animations',
	templateUrl: './animations.component.html',
	preserveWhitespaces: false,
	animations: [
		boxAnimation,
		boxAnimation2,
		boxAnimation3,
		bounceAnimation,
	],
})
export class AnimationsComponent {
	boxState: string = 'start';
	isVisible: boolean = true;

	boxState2: string = 'start';
	isVisible2: boolean = true;

	boxState3: string = 'start';
	isVisible3: boolean = true;

	// boxState4: string = 'start';
	isVisible4: boolean = true;

	animate(): void {
		this.boxState = this.boxState === 'end' ? 'start' : 'end';
	}

	animate2(): void {
		this.boxState2 = this.boxState2 === 'end' ? 'start' : 'end';
	}

	animate3(): void {
		this.boxState3 = this.boxState3 === 'end' ? 'start' : 'end';
	}


	// animate4(): void {
	// 	this.boxState4 = this.boxState4 === 'end' ? 'start' : 'end';
	// }

	animation3Started(event: AnimationEvent) {
		console.log('animation3Started', event);
	}

	animation3Done(event: AnimationEvent) {
		console.log('animation3Done', event);
	}
}
