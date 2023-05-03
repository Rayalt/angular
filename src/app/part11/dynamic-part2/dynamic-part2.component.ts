import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicComponent } from "../dynamic/dynamic.component";
import { RefDirective } from "../part11/ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
	selector: 'app-part11-dynamic-part2',
	templateUrl: './dynamic-part2.component.html',
	styles: [
	]
})
export class DynamicPart2Component implements OnInit {

	@ViewChild(RefDirective, {static: false}) refDir!: RefDirective;
	modal: boolean = false;

	constructor(
		private resolver: ComponentFactoryResolver,
		private title: Title, // изменить заголовок html дока
		private meta: Meta, // изменить метатеги
	) {
		const t = this.title;
		title.setTitle('New Document Title');
		console.log(t);

		this.meta.addTags([
			{
				name: 'keywords',
				content: 'angular, google, dynamicpart2component',
			},
			{
				name: 'description',
				content: 'this is dynamic part2 component',
			}
		]);
	}

	ngOnInit(): void {
	}

	showModal() {
		const modalFactory = this.resolver.resolveComponentFactory(DynamicComponent);
		this.refDir.containerRef.clear();
		const component = this.refDir.containerRef.createComponent(modalFactory);

		component.instance.title = 'Dynamic Title';
		component.instance.close.subscribe(() => {
			this.refDir.containerRef.clear();
		});
	}
}
