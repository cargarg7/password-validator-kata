import { AT_LEAST_ONE_LOWER_CASE_REGEX } from './has-lower-case-error-message';

export function hasLowerCase(payload?: string): boolean {
	return payload && AT_LEAST_ONE_LOWER_CASE_REGEX.test(payload);
}
