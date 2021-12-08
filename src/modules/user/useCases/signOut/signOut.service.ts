import prisma from 'prisma'

export class SignOutService {
	async handle (refrash_key: string) {
		await prisma.refrashToken.deleteMany({
			where: {
				id: refrash_key
			}
		})
	}
}