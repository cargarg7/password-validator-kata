import { ValidationRules } from '../common/types/validation-rules';
import { ErrorMessage } from './empty-error-message';
import { isEmpty } from './is-empty';
import { validateResponseDecorator } from '../common/decorators/validator-rules-response';

export function validateEmptyRule(data: ValidationRules): ValidationRules {
	const { payload } = data;
	const hasError = isEmpty(payload);
	return validateResponseDecorator({ ...data, hasError, errorMessage: ErrorMessage });
}
