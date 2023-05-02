import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
		MenuComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		MenuComponent,
	],
})
export class MenuModule {}
