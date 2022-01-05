import { TrainingSheet } from '@prisma/client'
import { randomUUID as uuid } from 'crypto'

import prisma from 'prisma'
import { ErrorHandler } from 'utils/ErrorHandler'
import logger from 'utils/logger'

type CreateTrainingSheet = Pick<TrainingSheet,  | 'height' | 'user_id' | 'weight' | 'chronic_problem' | 'fit_level' | 'goal'>

export class TrainingSheetService {
	async create({ height, user_id, weight, chronic_problem, fit_level, goal }: CreateTrainingSheet) {
    
		const user = await prisma.user.findFirst({
			where: {
				id: user_id
			},
			select: {
				training_sheet: {
					where: {
						created_at: {
							gte: new Date(new Date().getFullYear(), 0, 0),
						}
					}
				}
			}
		})

		if (!user) throw new ErrorHandler('', {
			error: 'TRAINING_SHEET_USER_NOT_FOUND',
			statusCode: 400
		})

		if (user.training_sheet && user.training_sheet.length > 0) throw new ErrorHandler('', {
			error: 'TRAINING_SHEET_ALREADY_CREATED_THIS_YEAR',
			statusCode: 400
		})

		return await prisma.trainingSheet.create({
			data: {
				id: uuid(),
				chronic_problem,
				height,
				weight,
				user_id,
				fit_level,
				goal
			}
		})
	}

	async findFirst (user_id: string) {
		return await prisma.trainingSheet.findFirst({
			where: {
				user_id,
				created_at: {
					gte: new Date(new Date().getFullYear(), 0 ,0)
				}
			},
			select: {
				chronic_problem: true,
				created_at: true,
				fit_level: true,
				goal: true,
				height: true,
				id: true,
				updated_at: true,
				weight: true,
				user: {
					select: {
						id: true
					}
				}
			}
		})
	}
}