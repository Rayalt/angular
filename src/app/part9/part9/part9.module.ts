import {NgModule} from '@angular/core';
import {Part9Component} from './part9.component';
import {AuthGuard} from '../auth/auth-guard';
import {Post2Component} from '../post2/post2.component';
import {Post2Resolver} from '../post2/post2.resolver';
import {NestedPagesComponent} from '../nested-pages/nested-pages.component';
import {NestedComponent} from '../nested/nested.component';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {RouterModule, Routes} from '@angular/router';
import {NavigationComponent} from '../navigation/navigation.component';
import {AllPostsComponent} from '../all-posts/all-posts.component';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';

const routeChildCollection: Routes = [
	{
		path: 'part9',
		component: Part9Component,
		canActivate: [AuthGuard],
	},
	{
		path: 'part9/:id',
		component: Post2Component,
		canActivate: [AuthGuard],
		resolve: {
			post2: Post2Resolver,
		}
	},
	{
		path: 'part9b',
		component: NestedPagesComponent,
		children: [
			{
				path: 'nested',
				component: NestedComponent,
			}
		],
		canActivateChild: [AuthGuard],
	},
];

@NgModule({
	declarations: [
		NavigationComponent,
		Post2Component,
		AllPostsComponent,
		NestedPagesComponent,
		NestedComponent,
		Part9Component,
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

export class Part9Module {
}
