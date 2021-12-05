import { Account } from '@prisma/client'
import { ACCOUNT_ERRORS } from 'constants/errors'
import { randomUUID as uuid } from 'crypto'

import prisma from 'prisma'

type AccountCreate = Pick<Account, 'user_id'>

export class AccountService {
	async create ({ user_id }: AccountCreate) {
		const accountExist = await prisma.account.findFirst({
			where: {
				user_id
			}
		})
    
		if (accountExist) throw new Error(ACCOUNT_ERRORS.ALREADY_EXIST_USER_RELATED)


		return await prisma.account.create({
			data: {
				id: uuid(),
				user: {
					connect: {
						id: user_id
					}
				}
			}
		})
	}

	async findOne (user_id: string) {
		return await prisma.account.findFirst({
			where: {
				user_id
			}
		})
	}
}