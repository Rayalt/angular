import {compute} from './compute';

describe('compute', () => {
	it('should return 0 if input < 0', () => {
		const res = compute(-1);
		expect(res).toBe(0);
	});

	it('should return input increment if input > 0', () => {
		const res = compute(1);
		expect(res).toBe(2);
	});
});
