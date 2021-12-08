import { REFRASH_TOKEN_COOKIE_KEY } from 'constants/auth'
import { Request, Response } from 'express'
import { SignOutService } from './signOut.service'

export class SignOutController {
	constructor (private readonly service: SignOutService) {}

	async execute (request: Request, response: Response) {
		try {
        
			const refrash_token_cookie = request.cookies

			await this.service.handle(refrash_token_cookie)
			response.clearCookie(REFRASH_TOKEN_COOKIE_KEY)

			return response.sendStatus(200)

		} catch (err) {
			return response.sendStatus(500)
		}
	}
}