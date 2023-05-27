import {NgModule} from '@angular/core';
import {NestedPages2Component} from './nested-pages2.component';
import {Nested2Component} from '../nested2/nested2.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CardModule} from '../../shared/card/card.module';

const routeChildCollection: Routes = [
	{
		path: '',
		component: NestedPages2Component,
		children: [
			{
				path: 'nested2',
				component: Nested2Component,
			}
		],
	}, //todo не всегда работает
];

@NgModule({
	declarations: [
		NestedPages2Component,
		Nested2Component,
	],
	imports: [
		CommonModule,
		SharedModule,
		CardModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	]
})
export class NestedPage2Module {
}
