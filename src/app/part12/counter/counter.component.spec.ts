import {CounterComponent} from './counter.component';
import {FormBuilder} from '@angular/forms';

describe('CounterComponent', () => {

	let component: CounterComponent;

	beforeEach(() => {
		component = new CounterComponent(new FormBuilder());
	});

	// есть еще методы beforeAll, afterEach, afterAll

	it('should increment counter by 1', () => {
		component.increment();
		expect(component.counter).toBe(1);
	});

	it('should decrement counter by 1', () => {
		component.decrement();
		expect(component.counter).toBe(-1);
	});

	// test eventEmitter
	it('should increment value by event emitter', () => {
		let res: number = 0;
		component.counterEmitter.subscribe(val => res = val);

		component.increment();
		expect(res).toBe(1);
	});

	// test Forms
	it('should create form with 2 controls', () => {
		expect(component.form.contains('login')).toBeTruthy();
		expect(component.form.contains('email')).toBeTruthy();
	});
	it('should mark login as invalid if empty value', () => {
		const control = component.form.get('login');

		control?.setValue('');

		expect(control?.valid).toBeFalse();
	});
});
