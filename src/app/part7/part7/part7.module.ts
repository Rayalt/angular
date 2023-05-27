import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {RouterModule, Routes} from '@angular/router';
import {Part7Component} from './part7.component';
import {FormComponent} from '../form/form.component';
import {OwnNgModelComponent} from '../own-ng-model/own-ng-model.component';
import {SwitchComponent} from '../switch/switch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';

const routeChildCollection: Routes = [
	{
		path: 'part7',
		component: Part7Component,
	},
];

@NgModule({
	declarations: [
		FormComponent,
		OwnNgModelComponent,
		SwitchComponent,
		Part7Component,
	],
	imports: [
		CommonModule,
		CardModule,
		FormsModule,
		ReactiveFormsModule,
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	],
})

export class Part7Module {
}
