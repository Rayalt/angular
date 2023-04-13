import { Injectable } from '@angular/core';

@Injectable()
export class CounterLocalService {

	constructor() {}

	counter: number = 0;

	increase() {
		this.counter++;
	}

	decrease() {
		this.counter--;
	}
}
