import { ERROR_CONSTANTS } from 'constants/errors'

interface PayloadError {
  statusCode: number
  error: keyof typeof ERROR_CONSTANTS 
}

export class ErrorHandler extends Error implements PayloadError  {
	statusCode: number
	error:  keyof typeof ERROR_CONSTANTS
  
	constructor (message: string, error: PayloadError) {
		super(message)
		this.statusCode = error.statusCode
		this.error = error.error
	}
 
}
