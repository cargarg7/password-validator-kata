import { ErrorMessage, AT_LEAST_ONE_UPPER_CASE_REGEX } from './enums';
import { ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from '../helpers/status.helper';
import { errorMessagesByErrorAndPreviousState } from '../helpers/error-messages.helper';

function isUpperCaseError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_UPPER_CASE_REGEX.test(payload);
}

export function validateHasUppercase({ payload, status, errorMessages }: ValidationRules): ValidationRules {
	const error = isUpperCaseError(payload);
	return {
		payload,
		status: statusByErrorAndPreviousState(error, status),
		errorMessages: errorMessagesByErrorAndPreviousState(error, ErrorMessage, errorMessages),
	};
}
