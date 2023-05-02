import { ValidationRules } from '../common/types/validation-rules';
import { ErrorMessage } from './has-underscore-error-message';
import { hasUnderscore } from './has-underscore';
import { validateResponseDecorator } from '../common/decorators/validator-rules-response';

export function validateHasUnderscore(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = !hasUnderscore(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
