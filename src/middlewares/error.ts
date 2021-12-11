import { Request, Response } from 'express'
import { ErrorHandler } from 'utils/ErrorHandler'

export function errorHandler (error: Error, request: Request, response: Response) {
	
	if (error instanceof ErrorHandler) {
		return response.status(error.statusCode).json({
			error: {
				// message: error.message,
				name: error.error
			}
		})
	}

	return response.status(500).send('')
}