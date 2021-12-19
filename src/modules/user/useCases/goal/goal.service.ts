import { Goal } from '@prisma/client'

export type CreateGoal = Pick<Goal, 'name'>

export class GoalService {
	async create ({ name }: CreateGoal) {
    
	}
}