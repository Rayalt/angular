import {Post3Component} from "./post3.component";
import {Post3Service} from "./post3.service";
import {EMPTY, of, throwError} from "rxjs";

describe('Post3 Component', () => {
	let component: Post3Component;
	let service: Post3Service;

	beforeEach(() => {
		// https://stackoverflow.com/questions/66941972/argument-of-type-null-is-not-assignable-to-parameter-of-type-httpclient-on-a
		const spy = jasmine.createSpyObj('HttpClient', {
			post: of({}),
			get: of({}),
		})
		service = new Post3Service(spy);
		component = new Post3Component(service);
	});

	it('should call fetch when ngOnInit', () => {
		const spy2 = spyOn(service, 'fetch').and.callFake(() => {
			return EMPTY;
		});

		component.ngOnInit();

		expect(spy2).toHaveBeenCalled();
	});

	it('should update posts length after ng on init', () => {
		const posts = [1, 2, 3, 4];

		spyOn(service, 'fetch').and.returnValue(of(posts));

		component.ngOnInit();

		expect(component.post3Collection.length).toBe(posts.length);
	});

	it('should add new post', () => {
		// const spy3 = spyOn(service, 'create').and.returnValue(EMPTY);
		//
		// component.add('test');
		//
		// expect(spy3).toHaveBeenCalled();
		// expect(component.post3Collection.length).toBe(1);

		const post = {title: 'title'};
		const spy3 = spyOn(service, 'create').and.returnValue(EMPTY);

		component.add(post.title);

		expect(spy3).toHaveBeenCalled();
		expect(component.post3Collection.length).toBe(1);
	});

	it('should set msg to err msg', () => {
		const err = 'Err msg';
		spyOn(service, 'create').and.returnValue(throwError(() => new Error(err)));

		component.add('Post title');

		expect(component.message).toBe(err);
	});

	it('should remove post if user confirmed', () => {
		const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
		spyOn(window, 'confirm').and.returnValue(true);

		component.delete(10);

		expect(spy).toHaveBeenCalledWith(10);
	});

	it('should not remove post if user canceled confirm', () => {
		const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
		spyOn(window, 'confirm').and.returnValue(false);

		component.delete(10);

		expect(spy).not.toHaveBeenCalled();
	});
})
