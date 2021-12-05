import { randomUUID as uuid } from 'crypto'

import { Transaction } from '@prisma/client'

import prisma from 'prisma'

import { Meta, Paginate, Paginated } from 'middlewares/pagination'

import { TRANSACTION_ERRORS } from 'constants/errors'

type CreateTransaction = Pick<Transaction, 'amount' | 'type' | 'account_id' | 'description'>

export class TransactionService {
	async create({ amount, type, account_id, description }: CreateTransaction) {
		
		return await prisma.transaction.create({
			data: {
				amount,
				type,
				description,
				id: uuid(),
				account: {
					connect: {
						id: account_id
					}
				}
			},
		})
	} 

	async findMany (account_id: string, queries: Paginate) {

		const count = await prisma.transaction.count({
			where: {
				account_id
			}
		}) 

		const results = await prisma.transaction.findMany({
			where: {
				account_id
			},
			take: queries?._per_page,
			skip: queries?._startIndex
		})

		const meta: Meta = {
			_page: queries._page,
			_per_page: queries._per_page,
			_next_page: queries._page + 1,
			_previues_page: queries._page - 1,
			_total_pages: Math.ceil(count / queries._per_page),
			_total_items: count
		}

		const data: Paginated = {
			meta,
			data: results,
		}

		return data
	}

	async delete (account_id: string, transactionS_id: string[]) {

		for (const transaction_id of transactionS_id) {
			const existTransaction = await prisma.transaction.findFirst({
				where: {
					id: transaction_id
				}
			})

			if (!existTransaction) throw new Error(TRANSACTION_ERRORS.NOT_FOUND)
		}


		await prisma.transaction.deleteMany({
			where:{
				id: {
					in: transactionS_id
				}
			}
		})
	}
}