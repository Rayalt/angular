import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoutingComponent} from './routing.component';
import {Subject} from 'rxjs';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

class RouterStub {
	navigate(path: string[]) {
	};
}

class ActivatedRouteStub {
	private subject = new Subject();

	get params() {
		return this.subject.asObservable();
	}

	push(params: Params) {
		this.subject.next(params);
	}

	// params!: Observable<Params>;
}

describe('RoutingComponent', () => {
	let component: RoutingComponent;
	let fixture: ComponentFixture<RoutingComponent>;
	let router: Router;
	let route: ActivatedRouteStub;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				RoutingComponent,
			],
			imports: [
				RouterTestingModule,
			],
			providers: [
				{
					provide: Router,
					useClass: RouterStub,
				},
				{
					provide: ActivatedRoute,
					useClass: ActivatedRouteStub,
				}
			],
			schemas: [
				NO_ERRORS_SCHEMA,
			]
		});

		fixture = TestBed.createComponent(RoutingComponent);
		component = fixture.componentInstance;

		// https://github.com/angular/angular/issues/32649
		router = TestBed.inject(Router);
		route = TestBed.inject(ActivatedRoute) as unknown as ActivatedRouteStub;

		fixture.detectChanges();
	});

	// тестирование роутера

	it('should be defined', () => {
		expect(component).toBeDefined();
	});

	// тестирование параметров url

	it('should navigate to part9 if goBack()', () => {
		let spy = spyOn(router, 'navigate');

		component.goBack();

		expect(spy).toHaveBeenCalledWith(['/part9']);
	});

	it('should navigate to 404 if id=0', () => {
		let spy = spyOn(router, 'navigate');

		route.push({id: '0'});

		expect(spy).toHaveBeenCalledWith(['/error']);
	});

	// поиск динамических директив

	it('should have router-outlet directive', () => {
		let debugEl = fixture.debugElement.query(By.directive(RouterOutlet));

		expect(debugEl).not.toBeNull();
	});
});
