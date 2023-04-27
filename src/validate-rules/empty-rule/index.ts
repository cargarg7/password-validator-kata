import { ErrorMessage } from './enums';
import { isEmpty } from './is-empty';
import { ValidationRules } from '../types';
import { validateResponseDecorator } from '../helpers/validator-response.helper';

export function validateEmptyRule(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isEmpty(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
