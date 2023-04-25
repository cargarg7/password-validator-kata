import { ErrorMessage, AT_LEAST_ONE_UNDERSCORE_REGEX } from './enums';
import { ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from '../helpers/status.helper';
import { errorMessagesByErrorAndPreviousState } from '../helpers/error-messages.helper';

function isUnderscoreError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_UNDERSCORE_REGEX.test(payload);
}

export function validateHasUnderscore({ payload, status, errorMessages }: ValidationRules): ValidationRules {
	const error = isUnderscoreError(payload);
	return {
		payload,
		status: statusByErrorAndPreviousState(error, status),
		errorMessages: errorMessagesByErrorAndPreviousState(error, ErrorMessage, errorMessages),
	};
}
