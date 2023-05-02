import { ErrorMessage } from './min-length-error-message';
import { isMinLength } from './is-min-length';
import { ValidationRules } from '../common/types/validation-rules';
import { validateResponseDecorator } from '../common/decorators/validator-rules-response';

export function validateMinLength(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = !isMinLength(payload);

	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
