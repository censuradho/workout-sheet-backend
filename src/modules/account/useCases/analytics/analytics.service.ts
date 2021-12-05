import prisma from 'prisma'

export class AnalyticsService {
	async balance (account_id: string) {
		const { _sum: total } = await prisma.transaction.aggregate({
			_sum: {
				amount: true
			},
			where: {
				account_id
			},	
		})

		const { _sum: income } = await prisma.income.aggregate({
			_sum: {
				amount: true
			},
			where: {
				account_id
			},	
		})

		const { _sum: expense } = await prisma.expense.aggregate({
			_sum: {
				amount: true
			},
			where: {
				account_id
			},	
		})
		
		return {
			total: total.amount || 0,
			income: income.amount || 0,
			expense: expense.amount || 0
		}
	}
}