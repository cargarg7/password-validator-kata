export type ValidationRules = {
	payload: string;
	status: boolean;
	errorMessages?: string[];
};

export type ErrorMessagesCallback = (hasError: boolean, newErrorMessage: string, errorMessages?: string[]) => string[];

export type StatusCallback = (hasError: boolean, oldStatus?: boolean) => boolean;

export type ValidateResponseCallbackInput = ValidationRules & {
	hasError: boolean;
	errorMessage: string;
};

export type ValidateResponseCallback = (payload: ValidateResponseCallbackInput) => ValidationRules;
