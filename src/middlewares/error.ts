import { Request, Response } from 'express'
import { ErrorHandler } from 'utils/ErrorHandler'

export function errorHandler (error: ErrorHandler | Error, request: Request, response: Response) {
	if (error instanceof ErrorHandler) {
		response.status(error.statusCode).json({
			error: {
				message: error.message,
				name: error.error
			}
		})
		response.sendStatus(500)
	}


}