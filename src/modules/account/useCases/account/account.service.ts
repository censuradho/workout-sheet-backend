import { ACCOUNT_ERRORS } from 'constants/errors'
import prisma from 'prisma'

export class AccountService {

	async findOne (user_id: string) {
		const result = await prisma.account.findFirst({
			where: {
				user_id
			}
		})

		if (!result) throw new Error(ACCOUNT_ERRORS.NOT_ACCOUNT_RELATED_USER)

		return result
	}
}