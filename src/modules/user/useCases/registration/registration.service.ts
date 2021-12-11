import { User } from '@prisma/client'
import { randomUUID as uuid  } from 'crypto'

import { hash } from 'utils/_bcrypt'

import prisma from 'prisma'
import { ErrorHandler } from 'utils/ErrorHandler'

type UserRegister = Pick<User, 'email' | 'password'>

export class RegistrationService {
	async create ({ email, password }: UserRegister) {

		const userExist = await prisma.user.findFirst({
			where: {
				email
			}
		})

		if (userExist) throw new ErrorHandler('USER_REGISTRATION_ALREADY_EXIST', {
			error: 'USER_REGISTRATION_ALREADY_EXIST',
			statusCode: 401
		})

		const passwordHash = await hash(password)

		const user = await prisma.user.create({
			data: {
				email,
				password: passwordHash,
				id: uuid(),
				account: {
					create: {
						id: uuid()
					}
				}
			}
		})

		return user
	}

	async findMany () {
		return await prisma.user.findMany({
			select: {
				email: true,
				id: true,
				updated_at: true,
				created_at: true,
			}
		})
	}

	async delete (id: string) {
		const userExist = await prisma.user.findFirst({
			where: {
				id
			}
		})

		if (!userExist) throw new ErrorHandler('', {
			error: 'USER_REGISTRATION_NOT_FOUND',
			statusCode: 404
		})

		await prisma.user.delete({
			where: {
				id
			}
		})
	}
}