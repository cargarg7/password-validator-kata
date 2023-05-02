import { MIN_LENGTH } from './min-length-error-message';

export function isMinLength(payload?: string): boolean {
	return payload?.length >= MIN_LENGTH;
}
