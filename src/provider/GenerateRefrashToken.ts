import { randomUUID as uuid } from 'crypto'

import { addDays } from 'date-fns'

import prisma from 'prisma'

export class GenerateRefrashToken {
	static async execute (user_id: string) {
		return await prisma.refrashToken.create({
			data: {
				id: uuid(),
				user_id,
				expires_in: addDays(new Date(), 7).getTime()
			}
		})
	}
}