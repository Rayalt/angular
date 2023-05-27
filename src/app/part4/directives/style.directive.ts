import {Directive, ElementRef, HostListener, HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
	selector: '[appPart4Style]'
})

export class StyleDirective {

	@Input('appPart4Style') color: string = '#dc3545';
	@Input() fontWeight: string = 'normal';

	@Input() dStyles!: { border?: string, fontWeight?: string, borderRadius?: string, background?: string };

	@HostBinding('style.background') elBg: any = '';

	constructor(private elRef: ElementRef, private renderer2: Renderer2) {
		// console.log('elRef', elRef); // выведет элемент дома на котором директива appPart4Style

		elRef.nativeElement.style.backgroundColor = 'transparent'; // можно изменить стили appPart4Style

		// таким образом изменять стили appPart4Style корректнее
		this.renderer2.addClass(this.elRef.nativeElement, 'addClass');
		this.renderer2.setStyle(this.elRef.nativeElement, 'text-decoration', 'none');
	}

	@HostListener('click', ['$event.target']) hostListenerClick(event: Event) {
		console.log('event', event);
	}

	@HostListener('mouseenter') hostListenerMouseEnter() {
		this.renderer2.setStyle(this.elRef.nativeElement, 'color', this.color);
		this.renderer2.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);

		this.renderer2.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
		this.renderer2.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
		this.renderer2.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);

		this.elBg = this.dStyles.background;
	}

	@HostListener('mouseleave') hostListenerMouseLeave() {
		this.renderer2.setStyle(this.elRef.nativeElement, 'color', null);
		this.renderer2.setStyle(this.elRef.nativeElement, 'fontWeight', null);

		this.renderer2.setStyle(this.elRef.nativeElement, 'fontWeight', null);
		this.renderer2.setStyle(this.elRef.nativeElement, 'border', null);
		this.renderer2.setStyle(this.elRef.nativeElement, 'borderRadius', null);

		this.elBg = null;
	}
}
