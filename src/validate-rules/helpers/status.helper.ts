export function statusByErrorAndPreviousState(hasError: boolean, oldStatus?: boolean) {
	return oldStatus === false ? oldStatus : !hasError;
}
