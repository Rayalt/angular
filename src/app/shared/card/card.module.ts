import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		CardComponent,
	],
	exports: [
		CardComponent,
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
	],
})

export class CardModule {
}
