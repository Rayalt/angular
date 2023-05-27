import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './error-page.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../card/card.module';
import {RouterModule, Routes} from '@angular/router';

const routeChildCollection: Routes = [
	{
		path: 'error',
		component: ErrorPageComponent,
	},
	{
		path: '**',
		redirectTo: '/error',
		// todo не на любой вложенности
	},
];

@NgModule({
	declarations: [
		ErrorPageComponent,
	],
	imports: [
		CommonModule,
		CardModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	],
})

export class ErrorPageModule {
}
