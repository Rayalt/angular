import {NgModule} from '@angular/core';
import {PipesDetailsComponent} from '../pipes-details/pipes-details.component';
import {PipesCreateComponent} from '../pipes-create/pipes-create.component';
import {MultByPipe} from '../pipes-create/mult-by.pipe';
import {ExMarksPipe} from '../pipes-create/ex-marks.pipe';
import {PipesFilterPostsComponent} from '../pipes-filter-posts/pipes-filter-posts.component';
import {FilterPipe} from '../pipes-filter-posts/filter.pipe';
import {PipeAsyncComponent} from '../pipe-async/pipe-async.component';
import {Part5Component} from './part5.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';

const routeChildCollection: Routes = [
	{
		path: 'part5',
		component: Part5Component,
	},
];

@NgModule({
	declarations: [
		PipesDetailsComponent,
		PipesCreateComponent,
		MultByPipe,
		ExMarksPipe,
		PipesFilterPostsComponent,
		FilterPipe,
		PipeAsyncComponent,
		Part5Component,
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

export class Part5Module {
}
