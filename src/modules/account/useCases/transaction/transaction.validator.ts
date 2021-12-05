import * as yup from 'yup'

export const createTransactionValidator = yup.object({
	amount: yup.number().required(),
	type: yup.string().required(),
	account_id: yup.string().required(),
})
