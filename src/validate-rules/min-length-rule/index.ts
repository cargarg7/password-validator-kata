import { ErrorMessage } from './enums';
import { isMinLengthError } from './is-min-length';
import { ValidationRules } from '../types';
import { validateResponseDecorator } from '../helpers/validator-response.helper';

export function validateMinLength(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isMinLengthError(payload);

	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
