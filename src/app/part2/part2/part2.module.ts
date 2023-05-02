import { NgModule } from "@angular/core";
import { DefaultComponent } from "../default/default.component";
import { DirectivesComponent } from "../directives/directives.component";
import { InterpolationComponent } from "../interpolation/interpolation.component";
import { OneWayBindingComponent } from "../one-way-binding/one-way-binding.component";
import { OnlyTsComponent } from "../only-ts/only-ts.component";
import { PipesComponent } from "../pipes/pipes.component";
import { TwoWayBindingComponent } from "../two-way-binding/two-way-binding.component";
import { CommonModule } from "@angular/common";
import { CardModule } from "../../shared/card/card.module";
import {RouterModule, Routes} from "@angular/router";
import { Part2Component } from "./part2.component";
import { FormsModule } from "@angular/forms";
import { HeaderSectionModule } from "../../shared/header-section/header-section.module";

const routeChildCollection: Routes = [
	{
		path: '',
		component: Part2Component,
		pathMatch: 'full',
	},
	{
		path: 'part2',
		component: Part2Component,
	},
];

@NgModule({
	declarations: [
		DefaultComponent,
		DirectivesComponent,
		InterpolationComponent,
		OneWayBindingComponent,
		OnlyTsComponent,
		PipesComponent,
		TwoWayBindingComponent,
		Part2Component,
	],
	imports: [
		CommonModule,
		HeaderSectionModule,
		CardModule,
		FormsModule,
		RouterModule.forChild(routeChildCollection), // регистрирует входящие величины для этого модуля
	],
	exports: [
		RouterModule, // открывает публичный api к данным, которые мы сюда передаем
	],
})

export class Part2Module {}
