import {countries} from './countries';

describe('countries', () => {
	it('should contain element\'s name', () => {
		const res = countries();

		expect(res).toContain('BA');
		expect(res).toContain('BR');
		expect(res).toContain('AU');
	});
});
