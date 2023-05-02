import { NgModule } from "@angular/core";
import { Part10Component } from "./part10.component";
import { ModulesComponent } from "../modules/modules.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CardModule } from "../../shared/card/card.module";
import { SharedModule } from "../shared/shared.module";
import { HeaderSectionModule } from "../../shared/header-section/header-section.module";

const routeChildCollection: Routes = [
	{
		path: 'part10',
		component: Part10Component,
	},
	{
		path: 'part10b',
		loadChildren: () => import('../nested-pages2/nested-page2.module').then(x => x.NestedPage2Module), // lazy load
	},
];

@NgModule({
	declarations: [
		ModulesComponent,
		Part10Component,
	],
	imports: [
		CommonModule,
		CardModule,
		SharedModule,
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	exports: [
		RouterModule,
	],
})

export class Part10Module {}
