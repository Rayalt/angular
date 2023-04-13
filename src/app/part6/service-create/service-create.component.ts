import { Component } from '@angular/core';
import { CounterService } from "./counter-service";
import { CounterLocalService } from "./counter-local.service";

@Component({
	selector: 'app-par6-service-create',
	templateUrl: './service-create.component.html',
	providers: [CounterLocalService],
})
export class ServiceCreateComponent {

	constructor(
		public appCounterService: CounterService,
		public counterLocalService: CounterLocalService,
	) {
	// TODO: private не работает

	}

}
