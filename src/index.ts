const MIN_LENGTH = 6;

export function passwordValidator(payload?: string) {
	if (!payload) throw new Error('Empty password is not valid');
	if (payload.length < MIN_LENGTH) throw new Error('Length must be greater or equalo to 6');
}
