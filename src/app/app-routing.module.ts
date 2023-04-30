import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {Part2Component} from "./part2/part2/part2.component";
import {Part3Component} from "./part3/part3/part3.component";
import {Part4Component} from "./part4/part4/part4.component";
import {Part5Component} from "./part5/part5/part5.component";
import {Part6Component} from "./part6/part6/part6.component";
import {Part7Component} from "./part7/part7/part7.component";
import {Part8Component} from "./part8/part8/part8.component";
import {Part9Component} from "./part9/part9/part9.component";
import {Post2Component} from "./part9/post2/post2.component";
import * as path from "path";
import {NestedComponent} from "./part9/nested/nested.component";
import {ErrorPageComponent} from "./part9/error-page/error-page.component";
import {AuthGuard} from "./part9/auth/auth-guard";
import {Post2Resolver} from "./part9/post2/post2.resolver";
import {LoginComponent} from "./part9/login/login.component";
import {NestedPagesComponent} from "./part9/nested-pages/nested-pages.component";

const routeCollection: Routes = [
	{
		path: 'part2',
		component: Part2Component,
	},
	{
		path: 'part3',
		component: Part3Component,
	},
	{
		path: 'part4',
		component: Part4Component,
	},
	{
		path: 'part5',
		component: Part5Component,
	},
	{
		path: 'part6',
		component: Part6Component,
	},
	{
		path: 'part7',
		component: Part7Component,
	},
	{
		path: 'part8',
		component: Part8Component,
	},
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
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'error',
		component: ErrorPageComponent,
	},
	{
		path: '**',
		redirectTo: '/error',
		// todo не на любой вложенности
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routeCollection)], // регистрирует входящие величины для этого модуля
	exports: [RouterModule], // открывает публичный api к данным, которые мы сюда передаем
})

export class AppRoutingModule {

}
