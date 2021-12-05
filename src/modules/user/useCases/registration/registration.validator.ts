import * as yup from 'yup'

export const createRegistrationValidator = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required()
})