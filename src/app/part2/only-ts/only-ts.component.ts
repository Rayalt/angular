import {Component} from '@angular/core';

@Component({
	selector: 'app-part2-only-ts',
	template: `
		<div class="container">
			<div class="only-ts card shadow-sm p-4">
				<h2 class="h2 mb-3">Компонент only-ts без html</h2>
				<p>Пример вывода компонента angular, состоящего из:</p>
				<p class="text-primary font-monospace">
					only-ts.component.ts
				</p>
			</div>

			<div class="only-ts p-4 mt-3">
				<app-shared-card
					cardClass="only-ts"
				>
					<ng-template #body>
						test only-ts
					</ng-template>
				</app-shared-card>
				<!--TODO: Без encapsulation: ViewEncapsulation.None, .only-ts не будет работать-->
			</div>
		</div>
	`,
	styles: [`
		.only-ts {
			background: rgba(13, 202, 240, 0.5);
		}
	`],
})

export class OnlyTsComponent {
}
