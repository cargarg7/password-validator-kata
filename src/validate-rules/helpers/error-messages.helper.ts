export function errorMessagesByErrorAndPreviousState(
	hasError: boolean,
	newErrorMessage: string,
	errorMessages: string[] = []
) {
	return hasError ? [...errorMessages].concat(newErrorMessage) : [...errorMessages];
}
