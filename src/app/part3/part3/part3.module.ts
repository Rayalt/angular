import {NgModule} from '@angular/core';
import {PostFormComponent} from '../post-form/post-form.component';
import {PostComponent} from '../post/post.component';
import {PostContainerComponent} from '../post-container/post-container.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {RouterModule, Routes} from '@angular/router';
import {Part3Component} from './part3.component';
import {FormsModule} from '@angular/forms';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';


const routeChildCollection: Routes = [
	{
		path: 'part3',
		component: Part3Component,
	},
];

@NgModule({
	declarations: [
		PostFormComponent,
		PostComponent,
		PostContainerComponent,
		Part3Component,
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

export class Part3Module {
}
