export function statusByErrorAndPreviousState(hasError: boolean, oldStatus?: boolean): boolean {
	return oldStatus === false ? oldStatus : !hasError;
}
