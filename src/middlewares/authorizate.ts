import { NextFunction, Request, Response } from 'express'

import { ERROR_CONSTANTS } from 'constants/errors'

import {  verifyToken } from 'utils/_jwt'
import { SignJWTPayload } from 'modules/user/useCases/signIn/signIn.service'
import { ErrorHandler } from 'utils/ErrorHandler'
import logger from 'utils/logger'

async function accountValidate (request: Request, response: Response, next: NextFunction) {
	const { authorization } = request.headers

	if (!authorization) return response.status(401).json({
		error: {
			error: ERROR_CONSTANTS.AUTHENTICATION_TOKEN_NOT_FOUND,
		}
	})
	
		
	const [, token] = authorization.split(' ')
	
	if (!token) return response.status(401).json({
		error: {
			error: ERROR_CONSTANTS.AUTHENTICATION_TOKEN_NOT_FOUND,
		}
	})

	
	try {
		const payload = verifyToken(token) as SignJWTPayload
	
		request.user_info = payload
	
		next()
	} catch (err) {

		return response.status(401).json({
			error: {
				error: ERROR_CONSTANTS.AUTHENTICATION_TOKEN_INVALID,
			}
		})
		
	}



}

export default accountValidate