import { OPERATION_TYPE } from 'constants/transaction'
import prisma from 'prisma'

export class AnalyticsService {
	async handle (user_id: string, account_id: string) {
		const income = await prisma.transaction.aggregate({
			where: {
				type: OPERATION_TYPE.INCOME,
				account: {
					user_id,
					id: account_id
				}
			},
			_sum: {
				amount: true
			}
		})

		const expense = await prisma.transaction.aggregate({
			where: {
				type: OPERATION_TYPE.EXPENSE,
				account_id

			},
			_sum: {
				amount: true
			}
		})


		const total = await prisma.transaction.aggregate({
			where: {
				account_id
			},
			_sum: {
				amount: true
			}
		})

		return {
			total: total._sum.amount || 0,
			expense: expense._sum.amount || 0,
			income: income._sum.amount || 0
		}

	}
}