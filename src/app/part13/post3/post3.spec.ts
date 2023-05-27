import {Post3Component} from './post3.component';
import {Post3Service} from './post3.service';
import {of} from 'rxjs';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

describe('Post3Component', () => {
	let fixture: ComponentFixture<Post3Component>;
	let component: Post3Component;
	let service: Post3Service;

	beforeEach(() => {
		// const spy = jasmine.createSpyObj('HttpClient', {
		// 	post: of({}),
		// 	get: of({}),
		// });
		//
		// service = new Post3Service(spy);
		// component = new Post3Component(service);

		TestBed.configureTestingModule({
			declarations: [
				Post3Component,
			],
			providers: [
				Post3Service,
			],
			imports: [
				HttpClientModule,
			],
		});

		fixture = TestBed.createComponent(Post3Component);
		component = fixture.componentInstance;
		service = fixture.debugElement.injector.get(Post3Service); // более длинная чем см ниже
		// service = TestBed.get(Post3Service); // устаревшее
	});

	xit('should fetch posts on ngOnInit', () => {
		const post3Collection = [1, 2, 3];

		spyOn(service, 'fetch').and.returnValue(of(post3Collection));

		fixture.detectChanges();

		expect(component.post3Collection).toEqual(post3Collection);
	});

	it('should fetch posts on ngOnInit (promise)', fakeAsync(() => {
		const post3Collection = [1, 2, 3];
		spyOn(service, 'fetchPromise').and.returnValue(Promise.resolve(post3Collection));

		fixture.detectChanges();

		tick();

		expect(component.post3Collection.length).toBe(post3Collection.length);
	}));


});
