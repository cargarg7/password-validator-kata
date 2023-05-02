export function errorMessagesByErrorAndPreviousState(
	hasError: boolean,
	newErrorMessage: string,
	errorMessages: string[] = []
): string[] {
	return hasError ? [...errorMessages].concat(newErrorMessage) : [...errorMessages];
}
