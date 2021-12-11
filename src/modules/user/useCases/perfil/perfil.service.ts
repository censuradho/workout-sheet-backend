import { randomUUID as uuid } from 'crypto'

import { Profile } from '@prisma/client'

import prisma from 'prisma'

import { ErrorHandler } from 'utils/ErrorHandler'

type CreateProfile = Pick<Profile, 'avatar_url' | 'user_id' | 'username'>
type UpdateProfile = Pick<Profile, 'avatar_url' | 'username'>

export class PerfilService {
	async create ({ avatar_url, user_id, username }: CreateProfile) {
		const perfilExist = await prisma.profile.findFirst({
			where: {
				user_id
			}
		})

		if (perfilExist) throw new ErrorHandler('', {
			error: 'PERFIL_ALREADY_EXIST',
			statusCode: 400
		})

		return await prisma.profile.create({
			data: {
				username,
				avatar_url,
				id: uuid(),
				user: {
					connect: {
						id: user_id
					}
				}
			},
		})
	}

	async update (user_id: string, payload: Partial<UpdateProfile>) {
		await prisma.profile.update({
			where: {
				user_id
			},
			data: {
				...payload
			}
		})
	}
	async findByUserId (user_id: string) {
		return await prisma.profile.findFirst({
			where: {
				user_id
			}
		})
	}
}