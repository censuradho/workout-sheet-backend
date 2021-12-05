import { TransactionService } from './transaction.service'
import { TransactionController } from './transaction.controller'

export * from './transaction.validator'

const transactionService = new TransactionService()
export const transactionController = new TransactionController(transactionService)

