import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Part11Component} from './part11.component';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';
import {CardModule} from '../../shared/card/card.module';
import {DynamicComponent} from '../dynamic/dynamic.component';
import {DynamicPart1Component} from '../dynamic-part1/dynamic-part1.component';
import {DynamicPart2Component} from '../dynamic-part2/dynamic-part2.component';
import {RefDirective} from './ref.directive';

const routeChildCollection: Routes = [
	{
		path: 'part11',
		component: Part11Component,
	},
];

@NgModule({
	declarations: [
		DynamicPart1Component,
		DynamicPart2Component,
		DynamicComponent,
		RefDirective,
		Part11Component,
	],
	imports: [
		CommonModule,
		CardModule,
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	entryComponents: [
		DynamicComponent, // работает и без этого
	],
	exports: [
		RouterModule,
	],
})

export class Part11Module {
}
