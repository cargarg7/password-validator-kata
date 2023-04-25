import { PasswordValidatorResponse } from './types';
import { ValidationRules } from './validate-rules/types';
import { validateEmptyRule } from './validate-rules/empty-rule';
import { validateMinLength } from './validate-rules/min-length-rule';
import { validateHasNumber } from './validate-rules/has-number-rule';
import { validateHasUppercase } from './validate-rules/has-upper-case-rule';
import { validateHasLowercase } from './validate-rules/has-lower-case-rule';
import { validateHasUnderscore } from './validate-rules/has-underscore-rule';

function compose(...fns) {
	return (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal);
}

export function passwordValidator(payload?: string): PasswordValidatorResponse {
	const { status, errorMessages }: ValidationRules = compose(
		validateHasUnderscore,
		validateHasLowercase,
		validateHasUppercase,
		validateHasNumber,
		validateMinLength,
		validateEmptyRule
	)({ payload });

	return {
		status,
		...(errorMessages?.length && { errorMessages }),
	};
}
