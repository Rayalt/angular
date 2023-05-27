import {NgModule} from '@angular/core';
import {Part13Component} from './part13.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';
import {CounterComponent} from '../counter/counter.component';
import {RoutingComponent} from '../routing/routing.component';
import {Post3Component} from '../post3/post3.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {ColorDirective} from '../directives/color.directive';

const routeChildCollection: Routes = [
	{
		path: 'part13',
		component: Part13Component,
	},
];

@NgModule({
	declarations: [
		Part13Component,
		CounterComponent,
		RoutingComponent,
		Post3Component,
		NavbarComponent,
		ColorDirective,
	],
	imports: [
		CommonModule,
		CardModule,
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	],
})

export class Part13Module {
}
