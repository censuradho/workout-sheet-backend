import { Goal } from '@prisma/client'
import { randomUUID as uuid } from 'crypto'


import prisma from 'prisma'

export type CreateGoal = Pick<Goal, 'name'>

export class GoalService {
	async create ({ name }: CreateGoal) {
		await prisma.goal.create({
			data: {
				id: uuid(),
				name
			}
		})
	}
}