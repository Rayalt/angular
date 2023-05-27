import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CounterComponent} from './counter.component';
import {By} from '@angular/platform-browser';

describe('CounterComponent2', () => {
	let component: CounterComponent;
	let fixture: ComponentFixture<CounterComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				CounterComponent,
			],
		});

		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.componentInstance;
	});

	it('should be created', () => {
		expect(component).toBeDefined();
	});

	it('should render counter property', () => {
		let num = 42;
		component.counter = num;

		fixture.detectChanges();

		let de = fixture.debugElement.query(By.css('.counter'));
		let el: HTMLElement = de.nativeElement;

		expect(el.textContent).toContain(num.toString());
	});

	it('should add `text-success` class if counter even', () => {
		component.counter = 6;

		fixture.detectChanges();

		let de = fixture.debugElement.query(By.css('.counter'));
		let el: HTMLElement = de.nativeElement;

		expect(el.classList.contains('text-success')).toBeTruthy();
	});

	it('should increment counter if increment btn clicked', () => {
		let btn = fixture.debugElement.query(By.css('#increment'));

		btn.triggerEventHandler('click', {});

		expect(component.counter).toBe(1);
	});
});
