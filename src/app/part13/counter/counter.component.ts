import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-part13-counter',
	templateUrl: './counter.component.html',
})

export class CounterComponent {
	counter = 0;


	// test eventEmitter
	@Output() counterEmitter = new EventEmitter<number>();

	increment() {
		this.counter++;
		this.counterEmitter.emit(this.counter);
	}

	decrement() {
		this.counter--;
	}
}
