import {RouterModule, Routes} from '@angular/router';
import {Part14Component} from './part14.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationsComponent} from '../animations/animations.component';
import {SharedModule} from '../../part10/shared/shared.module';

const routeChildCollection: Routes = [
	{
		path: 'part14',
		component: Part14Component,
	},
];

@NgModule({
	declarations: [
		Part14Component,
		AnimationsComponent,
	],
	imports: [
		CommonModule,
		CardModule,
		HeaderSectionModule,
		BrowserAnimationsModule,
		RouterModule.forChild(routeChildCollection),
		SharedModule,
	],
	exports: [
		RouterModule,
	],
})

export class Part14Module {}
