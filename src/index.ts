import { PasswordValidator } from './validation-rules/common/types/password-validator';
import { ValidationRules } from './validation-rules/common/types/validation-rules';
import { validateEmptyRule as emptyRule } from './validation-rules/empty-rule';
import { validateMinLength as minLength } from './validation-rules/min-length-rule';
import { validateHasNumber as hasNumber } from './validation-rules/has-number-rule';
import { validateHasUppercase as hasUppercase } from './validation-rules/has-upper-case-rule';
import { validateHasLowercase as hasLowerCase } from './validation-rules/has-lower-case-rule';
import { validateHasUnderscore as hasUnderscore } from './validation-rules/has-underscore-rule';
import { compose } from './helpers/compose-functions';

export function passwordValidator(payload?: string): PasswordValidator {
	const { status, errorMessages }: ValidationRules = compose(
		hasUnderscore,
		hasLowerCase,
		hasUppercase,
		hasNumber,
		minLength,
		emptyRule
	)({ payload });

	return {
		status,
		...(errorMessages?.length && { errorMessages }),
	};
}
