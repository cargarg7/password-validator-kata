import { AT_LEAST_ONE_LOWER_CASE_REGEX } from './enums';

export function isLowerCaseError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_LOWER_CASE_REGEX.test(payload);
}
