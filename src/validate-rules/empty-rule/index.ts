import { ErrorMessage } from './enums';
import { ValidationRules } from '../types';
import { statusByErrorAndPreviousState } from '../helpers/status.helper';
import { errorMessagesByErrorAndPreviousState } from '../helpers/error-messages.helper';

function isEmpty(payload?: string): boolean {
	return !payload;
}

export function validateEmptyRule({ payload, status, errorMessages }: ValidationRules): ValidationRules {
	const error = isEmpty(payload);
	return {
		payload,
		status: statusByErrorAndPreviousState(error, status),
		errorMessages: errorMessagesByErrorAndPreviousState(error, ErrorMessage, errorMessages),
	};
}
