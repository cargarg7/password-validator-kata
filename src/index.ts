const MIN_LENGTH = 6;
const AT_LEAST_ONE_NUMBER_REGEX = /(.*[0-9].*)/;
const AT_LEAST_ONE_UPPER_CASE_REGEX = /(.*[A-Z].*)/;
const AT_LEAST_ONE_LOWER_CASE_REGEX = /(.*[a-z].*)/;
const AT_LEAST_ONE_UNDERSCORE_REGEX = /(.*_.*)/;

type PasswordValidatorResponse = {
	status: boolean;
	errorMessages?: string[];
};

export function passwordValidator(payload?: string): PasswordValidatorResponse {
	const messages: string[] = [];
	// Main Validation
	if (!payload) {
		return {
			status: false,
			errorMessages: ['Empty password is not valid'],
		};
	}

	// Rest of validations
	if (payload.length < MIN_LENGTH) {
		messages.push('Length must be greater or equalo to 6');
	}
	if (!AT_LEAST_ONE_NUMBER_REGEX.test(payload)) {
		messages.push('Must be contain at least one number');
	}
	if (!AT_LEAST_ONE_UPPER_CASE_REGEX.test(payload)) {
		messages.push('Must be contain at least one upper case');
	}
	if (!AT_LEAST_ONE_LOWER_CASE_REGEX.test(payload)) {
		messages.push('Must be contain at least one lower case');
	}
	if (!AT_LEAST_ONE_UNDERSCORE_REGEX.test(payload)) {
		messages.push('Must be contain at least one underscore');
	}

	if (messages.length) {
		return {
			status: false,
			errorMessages: messages,
		};
	}

	return {
		status: true,
	};
}
