import * as yup from 'yup'

import { OPERATION_TYPE } from 'constants/transaction'

export const createTransactionValidator = yup.object({
	amount: yup.number().when('type', {
		is: OPERATION_TYPE.INCOME,
		then: schema => schema.positive().required(),
		otherwise: schema => schema.negative().required()
	}),
	type: yup
		.string()
		.test(
			'valueOf', `the value is not a valid type, valid values [${OPERATION_TYPE.EXPENSE}, ${OPERATION_TYPE.INCOME}]`, 
			value => !!OPERATION_TYPE[value as keyof typeof OPERATION_TYPE]
		)
		.required(),
	description: yup.string().required()
})

export const deleteTransactionValidator = yup.object({
	account_id: yup.string().uuid(),
	transactions_id:  yup.array().of(yup.string().uuid())
})