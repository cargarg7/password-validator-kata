import { ErrorMessage, AT_LEAST_ONE_NUMBER_REGEX } from './enums';
import { ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from '../helpers/status.helper';
import { errorMessagesByErrorAndPreviousState } from '../helpers/error-messages.helper';

function isNumberError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_NUMBER_REGEX.test(payload);
}

export function validateHasNumber({ payload, status, errorMessages }: ValidationRules): ValidationRules {
	const error = isNumberError(payload);
	return {
		payload,
		status: statusByErrorAndPreviousState(error, status),
		errorMessages: errorMessagesByErrorAndPreviousState(error, ErrorMessage, errorMessages),
	};
}
