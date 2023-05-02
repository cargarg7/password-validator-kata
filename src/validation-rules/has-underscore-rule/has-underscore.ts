import { AT_LEAST_ONE_UNDERSCORE_REGEX } from './has-underscore-error-message';

export function hasUnderscore(payload?: string): boolean {
	return payload && AT_LEAST_ONE_UNDERSCORE_REGEX.test(payload);
}
