import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {CardModule} from "../card/card.module";
import {RouterModule, Routes} from "@angular/router";

const routeChildCollection: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
];

@NgModule({
	declarations: [
		LoginComponent,
	],
	imports: [
		CommonModule,
		CardModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	],
})

export class LoginModule {}
