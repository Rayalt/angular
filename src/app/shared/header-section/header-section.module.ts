import {NgModule} from '@angular/core';
import {HeaderSectionComponent} from './header-section.component';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [
		HeaderSectionComponent,
	],
	imports: [
		CommonModule,
	],
	exports: [
		HeaderSectionComponent,
	],
})
export class HeaderSectionModule {
}
