import { ErrorMessage } from './enums';
import { isNumberError } from './is-number';
import { ValidationRules } from '../types';
import { validateResponseDecorator } from '../helpers/validator-response.helper';

export function validateHasNumber(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isNumberError(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
