import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-part12-counter',
	template: `Counter: {{ counter }}`
})

export class CounterComponent {
	counter = 0;

	//test forms
	public form!: FormGroup;
	// test eventEmitter
	@Output() counterEmitter = new EventEmitter<number>();

	constructor(private fb: FormBuilder) {
		this.form = fb.group({
			login: ['', Validators.required],
			email: [''],
		});
	}

	increment() {
		this.counter++;
		this.counterEmitter.emit(this.counter);
	}

	decrement() {
		this.counter--;
	}
}
