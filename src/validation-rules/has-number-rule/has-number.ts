import { AT_LEAST_ONE_NUMBER_REGEX } from './has-number-error-message';

export function hasNumber(payload?: string): boolean {
	return payload && AT_LEAST_ONE_NUMBER_REGEX.test(payload);
}
