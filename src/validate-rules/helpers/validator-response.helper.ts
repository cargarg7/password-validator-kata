import { ValidateResponseCallbackInput, ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from './status.helper';
import { errorMessagesByErrorAndPreviousState } from './error-messages.helper';

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
