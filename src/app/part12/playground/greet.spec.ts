import { greet } from "./greet";

describe('greet', function () {
	it('should include name in result', function () {
		expect(greet('Sosiska')).toContain('Sosiska');
		expect(greet('Kolbaska')).toContain('Kolbaska');
	});
});
