import { ValidationRules } from '../common/types/validation-rules';
import { ErrorMessage } from './has-lower-case-error-message';
import { hasLowerCase } from './has-lower-case';
import { validateResponseDecorator } from '../common/decorators/validator-rules-response';

export function validateHasLowercase(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = !hasLowerCase(payload);
	console.log('hasError hasLowerCase', hasError);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
