import prisma from 'prisma'

import { ErrorHandler } from 'utils/ErrorHandler'

export class AccountService {

	async findOne (user_id: string) {
		const result = await prisma.account.findFirst({
			where: {
				user_id
			}
		})

		if (!result) throw new ErrorHandler('', {
			error: 'ACCOUNT_NOT_ACCOUNT_RELATED_USER',
			statusCode: 400
		})

		return result
	}
}