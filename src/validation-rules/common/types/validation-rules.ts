export type ValidationRules = {
	payload: string;
	status: boolean;
	errorMessages?: string[];
};

export type ValidateResponseCallbackInput = ValidationRules & {
	hasError: boolean;
	errorMessage: string;
};

export type ValidateResponseCallback = (payload: ValidateResponseCallbackInput) => ValidationRules;
