import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[myOwnAppIfNot]'
})
export class IfNotDirective {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) {

	}

	@Input('myOwnAppIfNot') set ifNot(condition: boolean) {
		if (!condition) {
			// Показать элементы
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			// Скрыть элементы
			this.viewContainer.clear();
		}
	}

}
