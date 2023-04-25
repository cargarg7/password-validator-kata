import { ErrorMessage, MIN_LENGTH } from './enums';
import { ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from '../helpers/status.helper';
import { errorMessagesByErrorAndPreviousState } from '../helpers/error-messages.helper';

function isMinLengthError(payload?: string): boolean {
	return payload?.length < MIN_LENGTH;
}

export function validateMinLength({ payload, status, errorMessages }: ValidationRules): ValidationRules {
	const error = isMinLengthError(payload);

	return {
		payload,
		status: statusByErrorAndPreviousState(error, status),
		errorMessages: errorMessagesByErrorAndPreviousState(error, ErrorMessage, errorMessages),
	};
}
