import { ErrorMessage } from './enums';
import { isUpperCaseError } from './is-uppercase';
import { ValidationRules } from '../types';
import { validateResponseDecorator } from '../helpers/validator-response.helper';

export function validateHasUppercase(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isUpperCaseError(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
