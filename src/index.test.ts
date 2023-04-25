import { passwordValidator } from './index';

describe('Password Validator', () => {
	it('Should get ERROR when null or empty string given', () => {
		expect(passwordValidator()).toEqual({ status: false, errorMessages: ['Empty password is not valid'] });
		expect(passwordValidator('')).toEqual({ status: false, errorMessages: ['Empty password is not valid'] });
	});

	it('Should get ERROR when length is lower than 6 chars', () => {
		expect(passwordValidator('1Bc_e')).toEqual({
			status: false,
			errorMessages: ['Length must be greater or equalo to 6'],
		});
	});

	it('Should get ERROR when there is not at least one numbers', () => {
		expect(passwordValidator('Abc_ef')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one number'],
		});
	});

	it('Should get ERROR when there is not at least one upper case', () => {
		expect(passwordValidator('1bc_ef')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one upper case'],
		});
	});

	it('Should get ERROR when there is not at least one lower case', () => {
		expect(passwordValidator('1BC_EF')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one lower case'],
		});
	});

	it('Should get ERROR when there is not at least one underscore case', () => {
		expect(passwordValidator('1bcdEF')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one underscore'],
		});
	});

	it('Should get validate when everything is ok', () => {
		expect(passwordValidator('1bc_EF')).toEqual({
			status: true,
		});
	});
});
