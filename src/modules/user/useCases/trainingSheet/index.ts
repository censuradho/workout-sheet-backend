import { TrainingSheetController } from './trainingSheet.controller'
import { TrainingSheetService } from './trainingSheet.service'

export * from './trainingSheet.validator'

const trainingSheetService = new TrainingSheetService()
export const trainingSheetController = new TrainingSheetController(trainingSheetService)
