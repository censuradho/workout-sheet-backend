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
	(request, response, next) => transactionController.store(request, response, next)
)
	.delete('/:id', 
		authorizate,
		validator(deleteTransactionValidator), 
		(request, response, next) => transactionController.delete(request, response, next)
	)
	.get('/account', 
		authorizate,
		pagination, 
		(request, response, next) => transactionController.show(request, response, next)
	)

export { transactionRoutes }