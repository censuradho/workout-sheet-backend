import { NextFunction, Request, Response } from 'express'

import { AUTHENTICATION_ERRORS } from 'constants/errors'

import { decodeToken, verifyToken } from 'utils/_jwt'
import { SignJWTPayload } from 'modules/user/useCases/signIn/signIn.service'

async function accountValidate (request: Request, response: Response, next: NextFunction) {
	const { authorization } = request.headers

	const token = authorization?.split(' ')[1]

	if (!token) return response.status(401).json({
		error: {
			message: AUTHENTICATION_ERRORS.TOKEN_NOT_FOUND
		}
	})


	try {
		const payload = verifyToken(token) as SignJWTPayload

		request.user_info = payload

		next()
	} catch (err) {
		if (err instanceof Error) return response.status(401).json({
			error: {
				message: AUTHENTICATION_ERRORS.TOKEN_NOT_VALID
			}
		})
	}

}

export default accountValidate