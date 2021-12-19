import { FitLevel } from '@prisma/client'

import { randomUUID as uuid } from 'crypto'


import prisma from 'prisma'

export type CreateFitLevel = Pick<FitLevel, 'name'>

export class FitLevelService {
	async create ({ name }: CreateFitLevel) {
		return await prisma.fitLevel.create({
			data: {
				id: uuid(),
				name
			}
		})
	}

	async delete (id: string) {
		await prisma.fitLevel.delete({
			where: {
				id
			}
		})
	}

	async findMany () {
		return await prisma.fitLevel.findMany()
	}
}