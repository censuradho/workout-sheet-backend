import { FitLevelController } from './fitLevel.controller'
import { FitLevelService } from './fitLevel.service'

const fitLevelService = new FitLevelService()
export const fitLevelController = new FitLevelController(fitLevelService)
