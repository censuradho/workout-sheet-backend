import { GoalController } from './goal.controller'
import { GoalService } from './goal.service'

const goalService = new GoalService()
export const goalController = new GoalController(goalService)
