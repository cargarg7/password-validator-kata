import { MIN_LENGTH } from './enums';

export function isMinLengthError(payload?: string): boolean {
	return payload?.length < MIN_LENGTH;
}
