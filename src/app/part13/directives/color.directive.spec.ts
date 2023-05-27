import {ColorDirective} from './color.directive';
import {Component, ElementRef} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
	template: `
		<p appPart13Color="yellow">text 1</p>
		<p appPart13Color="">text 2</p>
	`
})

class HostComponent {
}

describe('ColorDirective', () => {
	let fixture: ComponentFixture<HostComponent>;
	let el: ElementRef;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				ColorDirective,
				HostComponent,
			],
		});

		fixture = TestBed.createComponent(HostComponent);
		el = fixture.nativeElement;

		fixture.detectChanges();
	});

	it('should create an instance', () => {
		const directive = new ColorDirective(el);
		expect(directive).toBeTruthy();
	});

	it('should apply input bg color', () => {
		let de = fixture.debugElement.queryAll(By.css('p'))[0];

		expect(de.nativeElement.style.backgroundColor).toBe('yellow');
	}); //todo not work

	it('should apply default input bg color', () => {
		let de = fixture.debugElement.queryAll(By.css('p'))[1];

		let directive = de.injector.get(ColorDirective);

		expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
	});  //todo not work
});
