import { ErrorMessage } from './enums';
import { isLowerCaseError } from './is-lower-case';
import { ValidationRules } from '../types';
import { validateResponseDecorator } from '../helpers/validator-response.helper';

export function validateHasLowercase(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isLowerCaseError(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
