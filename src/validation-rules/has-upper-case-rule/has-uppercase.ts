import { AT_LEAST_ONE_UPPER_CASE_REGEX } from './has-upper-case-error-message';

export function hasUppercase(payload?: string): boolean {
	return payload && AT_LEAST_ONE_UPPER_CASE_REGEX.test(payload);
}
