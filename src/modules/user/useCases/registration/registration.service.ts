import { User, Profile } from '@prisma/client'
import { randomUUID as uuid  } from 'crypto'

import { hash } from 'utils/_bcrypt'

import prisma from 'prisma'
import { USER_REGISTRATION } from 'constants/errors'

type UserRegister = Pick<User, 'email' | 'password'>

export class RegistrationService {
	async create ({ email, password }: UserRegister) {

		const userExist = await prisma.user.findFirst({
			where: {
				email
			}
		})

		if (userExist) throw new Error(USER_REGISTRATION.ALREADY_EXIST)

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

		if (!userExist) throw new Error(USER_REGISTRATION.NOT_FOUND)

		await prisma.user.delete({
			where: {
				id
			}
		})
	}
}