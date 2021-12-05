import { Router } from 'express'
import { pagination } from 'middlewares/pagination'

import { transactionController } from 'modules/account/useCases/transaction'

import validator from 'middlewares/validator'
import { createTransactionValidator } from 'modules/account/useCases/transaction/transaction.validator'

const transactionRoutes = Router()

transactionRoutes.post('/', validator(createTransactionValidator), (request, response) => transactionController.store(request, response))
transactionRoutes.get('/account/:account_id', pagination, (request, response) => transactionController.show(request, response))

export { transactionRoutes }