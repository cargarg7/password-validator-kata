import { AT_LEAST_ONE_UPPER_CASE_REGEX } from './enums';

export function isUpperCaseError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_UPPER_CASE_REGEX.test(payload);
}
