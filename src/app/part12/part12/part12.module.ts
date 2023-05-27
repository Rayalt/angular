import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Part12Component} from './part12.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';
import {CounterComponent} from '../counter/counter.component';
import {FormsModule} from '@angular/forms';
import {Post3Component} from '../post3/post3.component';

const routeChildCollection: Routes = [
	{
		path: 'part12',
		component: Part12Component,
	},
];

@NgModule({
	declarations: [
		Part12Component,
		CounterComponent,
		Post3Component,
	],
	imports: [
		CommonModule,
		CardModule,
		FormsModule,
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	],
})

export class Part12Module {
}
