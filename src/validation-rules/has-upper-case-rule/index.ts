import { ErrorMessage } from './has-upper-case-error-message';
import { hasUppercase } from './has-uppercase';
import { ValidationRules } from '../common/types/validation-rules';
import { validateResponseDecorator } from '../common/decorators/validator-rules-response';

export function validateHasUppercase(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = !hasUppercase(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
