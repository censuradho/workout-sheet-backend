import { NextFunction, Request, Response } from 'express'

import { ErrorHandler } from 'utils/ErrorHandler'
import logger from 'utils/logger'

export function errorHandler (error: ErrorHandler, request: Request, response: Response, next: NextFunction) {

	logger.error(error)
	
	return response.status(error.statusCode).json({
		error: {
			message: error.message,
			name: error.error
		}
	})

}