import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {RouterLinkWithHref} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavbarComponent', () => {
	let component: NavbarComponent;
	let fixture: ComponentFixture<NavbarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				NavbarComponent
			],
			imports: [
				RouterTestingModule
			],
		})
			.compileComponents();

		fixture = TestBed.createComponent(NavbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have link to part9 page', () => {
		let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

		let index = debugElements.findIndex(e => e.attributes['href'] === '/part9'); // todo с properties не работает

		expect(index).toBeGreaterThan(-1);
	});
});
