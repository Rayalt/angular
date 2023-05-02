import { NgModule } from "@angular/core";
import { ColorDirective } from "./color.directive";
import { PageNamePipe } from "./page-name.pipe";

@NgModule({
	exports: [
		PageNamePipe,
		ColorDirective,
	],
	declarations: [
		ColorDirective,
		PageNamePipe,
	],
})

export class SharedModule {}
