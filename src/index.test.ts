import { passwordValidator } from './index';

describe('Password Validator', () => {
	it('Should get ERROR when null or empty string given', () => {
		expect(() => passwordValidator()).toThrow('Empty password is not valid');
		expect(() => passwordValidator('')).toThrow('Empty password is not valid');
	});

	it('Should get ERROR when length is lower than 6 chars', () => {
		expect(() => passwordValidator('abcde')).toThrow('Length must be greater or equalo to 6');
	});
});
