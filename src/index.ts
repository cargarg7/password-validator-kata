export function passwordValidator(payload?: string) {
	if (!payload) throw new Error('Empty password is not valid');
}
