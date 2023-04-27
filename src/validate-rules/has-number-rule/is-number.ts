import { AT_LEAST_ONE_NUMBER_REGEX } from './enums';

export function isNumberError(payload?: string): boolean {
	return payload && !AT_LEAST_ONE_NUMBER_REGEX.test(payload);
}
