import { passwordValidator } from './index';

describe('Password Validator', () => {
	it('Should get ERROR when null or empty string given', () => {
		expect(passwordValidator()).toEqual({
			status: false,
			errorMessages: [
				'Empty password is not valid',
				'Length must be greater or equalo to 6',
				'Must be contain at least one number',
				'Must be contain at least one upper case',
				'Must be contain at least one lower case',
				'Must be contain at least one underscore',
			],
		});
		expect(passwordValidator('')).toEqual({
			status: false,
			errorMessages: [
				'Empty password is not valid',
				'Length must be greater or equalo to 6',
				'Must be contain at least one number',
				'Must be contain at least one upper case',
				'Must be contain at least one lower case',
				'Must be contain at least one underscore',
			],
		});
	});

	it('Should get ERROR when length is lower than 6 chars', () => {
		expect(passwordValidator('1aA_')).toEqual({
			status: false,
			errorMessages: ['Length must be greater or equalo to 6'],
		});
	});

	it('Should get ERROR when has not at least one numbers', () => {
		expect(passwordValidator('abcdABCD_')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one number'],
		});
	});

	it('Should get ERROR when has not at least one upper case', () => {
		expect(passwordValidator('1234abcd_')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one upper case'],
		});
	});

	it('Should get ERROR when has not at least one lower case', () => {
		expect(passwordValidator('1234ABCD_')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one lower case'],
		});
	});

	it('Should get ERROR when has not at least one underscore case', () => {
		expect(passwordValidator('1234abcdABCD')).toEqual({
			status: false,
			errorMessages: ['Must be contain at least one underscore'],
		});
	});

	it('Should get ERRORs when has not 6 length, at least one number, at least one upper case, at least one lower case and at least one underscore', () => {
		expect(passwordValidator('()-/@')).toEqual({
			status: false,
			errorMessages: [
				'Length must be greater or equalo to 6',
				'Must be contain at least one number',
				'Must be contain at least one upper case',
				'Must be contain at least one lower case',
				'Must be contain at least one underscore',
			],
		});
	});

	it('Should get validate when everything is ok', () => {
		expect(passwordValidator('1234abcdABCD_')).toEqual({ status: true });
	});
});
