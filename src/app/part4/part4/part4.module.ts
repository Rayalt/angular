import {NgModule} from '@angular/core';
import {StyleDirective} from '../directives/style.directive';
import {DirectivesContentComponent} from '../directives-content/directives-content.component';
import {DirectiveStructureComponent} from '../directive-structure/directive-structure.component';
import {IfNotDirective} from '../directives/if-not.directive';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {Part4Component} from './part4.component';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';

const routeChildCollection: Routes = [
	{
		path: 'part4',
		component: Part4Component,
	},
];

@NgModule({
	declarations: [
		StyleDirective,
		DirectivesContentComponent,
		DirectiveStructureComponent,
		IfNotDirective,
		Part4Component,
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

export class Part4Module {
}
