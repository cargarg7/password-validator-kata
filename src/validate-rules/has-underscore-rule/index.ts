import { ErrorMessage } from './enums';
import { isUnderscoreError } from './is-underscore';
import { ValidationRules } from '../types';
import { validateResponseDecorator } from '../helpers/validator-response.helper';

export function validateHasUnderscore(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isUnderscoreError(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
