import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[part11Ref]'
})

export class RefDirective {
	constructor(public containerRef: ViewContainerRef) {
	}
}
