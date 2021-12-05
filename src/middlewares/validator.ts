import { SERVER_ERRORS } from 'constants/errors'
import { NextFunction, Request, Response } from 'express'
import { BaseSchema, ValidationError } from 'yup'

function validator (schema: BaseSchema) {
	return  async (request: Request, response: Response, next: NextFunction) => {
		try {

			await schema.validate(request.body, {
				abortEarly: false
			})

			next()
		} catch (err) {
			if (!(err instanceof ValidationError)) return response.status(500).json({
				error: {
					message: SERVER_ERRORS.INTERNAL
				}
			})

			const errors = err.inner.map(error => ({
				field: error.path,
				type: error.type,
				error_messages: error.errors
			}))

			return response.status(400).json({
				errors
			})
		}
	}
}

export default validator