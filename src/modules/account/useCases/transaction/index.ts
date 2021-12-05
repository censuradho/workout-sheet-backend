import { TransactionService } from './transaction.service'
import { TransactionController } from './transaction.controller'

const transactionService = new TransactionService()
export const transactionController = new TransactionController(transactionService)

