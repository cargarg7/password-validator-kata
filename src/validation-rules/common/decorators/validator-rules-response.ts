import { ValidateResponseCallbackInput, ValidationRules } from '../types/validation-rules';
import { statusByErrorAndPreviousState } from '../helpers/status-by-error-or-previous';
import { errorMessagesByErrorAndPreviousState } from '../helpers/group-error-messages';

export function validateResponseDecorator({
	payload,
	status,
	errorMessages,
	hasError,
	errorMessage,
}: ValidateResponseCallbackInput): ValidationRules {
	return {
		payload,
		status: statusByErrorAndPreviousState(hasError, status),
		errorMessages: errorMessagesByErrorAndPreviousState(hasError, errorMessage, errorMessages),
	};
}
