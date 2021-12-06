import { isAfter } from 'date-fns'

import prisma from 'prisma'

import { GenerateRefrashToken } from 'provider/GenerateRefrashToken'

import { generateToken } from 'utils/_jwt'

import { AUTHENTICATION_ERRORS } from 'constants/errors'

import { SignJWTPayload } from '../signIn/signIn.service'


export class RefrashTokenService  {
	async execute (refrash_token: string) {
		const refrashToken =  await prisma.refrashToken.findFirst({
			where: {
				id: refrash_token
			},
			include: {
				user: {
					select: {
						id: true,
						account: true
					}
				}
			}
		})

		if (!refrashToken) throw new Error(AUTHENTICATION_ERRORS.REFRASH_TOKEN_INVALID)

		const isRefrashTokenExpired = isAfter(new Date().getTime(), refrashToken.expires_in)

		const payload: SignJWTPayload = {
			id: refrashToken.user.id,
			account_id: String(refrashToken.user.account?.id)
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
				refrash_token: newRefrashToken
			}
		}


		return { token }
	}
}