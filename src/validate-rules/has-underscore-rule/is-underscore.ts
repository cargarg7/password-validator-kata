import { AT_LEAST_ONE_UNDERSCORE_REGEX } from './enums';

export function isUnderscoreError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_UNDERSCORE_REGEX.test(payload);
}
