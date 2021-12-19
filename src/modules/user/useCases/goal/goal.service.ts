import { Goal } from '@prisma/client'
import { randomUUID as uuid } from 'crypto'


import prisma from 'prisma'

export type CreateGoal = Pick<Goal, 'name'>

export class GoalService {
	async create ({ name }: CreateGoal) {
		return await prisma.goal.create({
			data: {
				id: uuid(),
				name
			}
		})
	}

	async delete (id: string) {
		await prisma.goal.delete({
			where: {
				id
			}
		})
	}

	async findMany () {
		return await prisma.goal.findMany()
	}
}