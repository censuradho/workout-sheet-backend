import { Router } from 'express'
import { pagination } from 'middlewares/pagination'

import { 
	transactionController, 
	createTransactionValidator, 
	deleteTransactionValidator 
} from 'modules/account/useCases/transaction'

import validator from 'middlewares/validator'

import authorizate from 'middlewares/authorizate'

const transactionRoutes = Router()

transactionRoutes.post('/', 
	authorizate, 
	validator(createTransactionValidator), 
	(request, response) => transactionController.store(request, response)
)
	.delete('/', 
		validator(deleteTransactionValidator), 
		(request, response) => transactionController.delete(request, response)
	)
	.get('/account', 
		pagination, 
		(request, response) => transactionController.show(request, response)
	)

export { transactionRoutes }