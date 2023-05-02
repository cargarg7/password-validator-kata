import { ValidationRules } from '../common/types/validation-rules';
import { ErrorMessage } from './has-number-error-message';
import { hasNumber } from './has-number';
import { validateResponseDecorator } from '../common/decorators/validator-rules-response';

export function validateHasNumber(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = !hasNumber(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
