import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
	selector: '[appPart13Color]'
})
export class ColorDirective implements OnChanges {

	defaultColor: string = 'blue';

	@Input('appPart13Color') color: string = '';

	constructor(
		private el: ElementRef,
	) {
	}

	ngOnChanges(): void {
		this.el.nativeElement.style.backgroundColor = this.color || this.defaultColor;
	}

}
