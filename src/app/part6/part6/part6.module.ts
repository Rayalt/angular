import {NgModule} from '@angular/core';
import {ServiceCreateComponent} from '../service-create/service-create.component';
import {CounterComponent} from '../counter/counter.component';
import {Part6Component} from './part6.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {RouterModule, Routes} from '@angular/router';
import {CounterService} from '../service-create/counter-service';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';

const routeChildCollection: Routes = [
	{
		path: 'part6',
		component: Part6Component,
	},
];

@NgModule({
	declarations: [
		ServiceCreateComponent,
		CounterComponent,
		Part6Component,
	],
	imports: [
		CommonModule,
		CardModule,
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	providers: [
		// Тут регистрируем сервисы
		CounterService,
	],
	exports: [
		RouterModule,
	],
})

export class Part6Module {
}
