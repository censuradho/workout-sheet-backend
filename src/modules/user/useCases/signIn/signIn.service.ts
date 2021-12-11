import { User } from '@prisma/client'


import prisma from 'prisma'
import { GenerateRefrashToken } from 'provider/GenerateRefrashToken'
import { ErrorHandler } from 'utils/ErrorHandler'

import { compare } from 'utils/_bcrypt'
import { generateToken } from 'utils/_jwt'

type CreateRequest = Pick<User, 'email' | 'password'>

export interface SignJWTPayload {
id: string;
account_id: string
}

export interface UserSignIn {
	id: string,
	account: {
		id: string
	}
}

export class SignInService {
	async create ({ email, password: _password }: CreateRequest) {
		const user = await prisma.user.findFirst({
			where: {
				email
			},
			include: {
				account: {
					select: {
						id: true,
					}
				}
			}
		})

		if (!user) throw new ErrorHandler('', {
			error: 'EMAIL_OR_PASSWORD_ARE_INCORRECT',
			statusCode: 401
		})

		const isEqualPassword = await compare(_password, user.password)

		if (!isEqualPassword) throw new ErrorHandler('', {
			error: 'EMAIL_OR_PASSWORD_ARE_INCORRECT',
			statusCode: 401
		})

		const payload: SignJWTPayload = {
			id: user.id,
			account_id: String(user.account?.id)
		}

		await prisma.refrashToken.deleteMany({
			where: {
				user_id: user.id
			}
		})

		const token = generateToken(payload)

		const refrash_token = await GenerateRefrashToken.execute(user.id)

		const { password, ...removePassUser } = user

		const userSignIn: UserSignIn = {
			account: {
				id: removePassUser.account?.id || '',
			},
			id: removePassUser.id
		}

		return {
			token,
			user: userSignIn,
			refrash_token
		}
	}
}