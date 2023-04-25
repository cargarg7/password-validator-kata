import { passwordValidator } from './index';

describe('Password Validator', () => {
	it('Should get ERROR when null or empty string given', () => {
		expect(() => passwordValidator()).toThrow('Empty password is not valid');
		expect(() => passwordValidator('')).toThrow('Empty password is not valid');
	});

    if ()
});
