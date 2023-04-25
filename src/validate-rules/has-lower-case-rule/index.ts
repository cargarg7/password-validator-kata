import { ErrorMessage, AT_LEAST_ONE_LOWER_CASE_REGEX } from './enums';
import { ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from '../helpers/status.helper';
import { errorMessagesByErrorAndPreviousState } from '../helpers/error-messages.helper';

function isLowerCaseError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_LOWER_CASE_REGEX.test(payload);
}

export function validateHasLowercase({ payload, status, errorMessages }: ValidationRules): ValidationRules {
	const error = isLowerCaseError(payload);
	return {
		payload,
		status: statusByErrorAndPreviousState(error, status),
		errorMessages: errorMessagesByErrorAndPreviousState(error, ErrorMessage, errorMessages),
	};
}
