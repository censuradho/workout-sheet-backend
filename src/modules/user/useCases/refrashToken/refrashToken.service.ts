import { isAfter } from 'date-fns'

import prisma from 'prisma'

import { GenerateRefrashToken } from 'provider/GenerateRefrashToken'

import { generateToken } from 'utils/_jwt'

import { SignJWTPayload, UserSignIn } from '../signIn/signIn.service'
import { ErrorHandler } from 'utils/ErrorHandler'

export class RefrashTokenService  {
	async execute (refrash_token: string) {
		const refrashToken = await prisma.refrashToken.findFirst({
			where: {
				id: refrash_token
			},
			include: {
				user: {
					select: {
						id: true,
						account: true,
						email: true,
						created_at: true,
						updated_at: true
					}
				}
			}
		})

		if (!refrashToken) throw new ErrorHandler('', {
			error: 'AUTHENTICATION_REFRASH_TOKEN_INVALID',
			statusCode: 401
		})

		const isRefrashTokenExpired = isAfter(new Date().getTime(), refrashToken.expires_in)

		const payload: SignJWTPayload = {
			id: refrashToken.user.id,
			account_id: String(refrashToken.user.account?.id)
		}
		
		const user: UserSignIn = {
			id: refrashToken.user_id,
			account: {
				id: refrashToken.user.account?.id || ''
			}
		}
		
		const token = generateToken(payload)

		if (isRefrashTokenExpired) {
			await prisma.refrashToken.deleteMany({
				where: {
					user_id: refrashToken.user_id
				}
			})

			const newRefrashToken = await GenerateRefrashToken.execute(refrashToken.user_id)
			
			return {
				token, 
				user,
				refrash_token: newRefrashToken,
			}
		}


		return { token, user }
	}
}