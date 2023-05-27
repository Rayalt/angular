import {Component} from '@angular/core';
import {CounterService} from '../service-create/counter-service';
import {CounterLocalService} from '../service-create/counter-local.service';

@Component({
	selector: 'app-part6-counter',
	templateUrl: './counter.component.html',
	providers: [CounterLocalService],
})
export class CounterComponent {

	constructor(
		public appCounterService: CounterService,
		public counterLocalService: CounterLocalService,
	) {

	}

}
