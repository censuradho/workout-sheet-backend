export const USER_REGISTRATION = {
	USER_REGISTRATION_ALREADY_EXIST: 'USER_REGISTRATION_ALREADY_EXIST',
	USER_REGISTRATION_NOT_FOUND: 'USER_REGISTRATION_NOT_FOUND',
	EMAIL_OR_PASSWORD_ARE_INCORRECT: 'EMAIL_OR_PASSWORD_ARE_INCORRECT'
}

export const ACCOUNT_ERRORS = {
	ACCOUNT_ALREADY_EXIST_USER_RELATED: 'ACCOUNT_ALREADY_EXIST_USER_RELATED',
	ACCOUNT_NOT_ACCOUNT_RELATED_USER: 'ACCOUNT_NOT_ACCOUNT_RELATED_USER'
}

export const TRANSACTION_ERRORS = {
	TRANSACTION_NOT_FOUND: 'TRANSACTION_NOT_FOUND',
}

export const SERVER_ERRORS = {
	INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}

export const AUTHENTICATION_ERRORS = {
	AUTHENTICATION_TOKEN_NOT_FOUND: 'AUTHENTICATION_TOKEN_NOT_FOUND',
	AUTHENTICATION_TOKEN_INVALID: 'AUTHENTICATION_TOKEN_INVALID',
	AUTHENTICATION_TOKEN_EXPIRED: 'AUTHENTICATION_TOKEN_EXPIRED',
	AUTHENTICATION_REFRASH_TOKEN_INVALID: 'AUTHENTICATION_REFRASH_TOKEN_INVALID'
}

export const TRAINING_SHEET_ERRORS = {
	TRAINING_SHEET_USER_NOT_FOUND: 'TRAINING_SHEET_USER_NOT_FOUND',
	TRAINING_SHEET_ALREADY_CREATED_THIS_YEAR: 'TRAINING_SHEET_ALREADY_CREATED_THIS_YEAR'
}

export const ERROR_CONSTANTS = {
	...USER_REGISTRATION,
	...ACCOUNT_ERRORS,
	...TRANSACTION_ERRORS,
	...SERVER_ERRORS,
	...AUTHENTICATION_ERRORS,
	...TRAINING_SHEET_ERRORS
}