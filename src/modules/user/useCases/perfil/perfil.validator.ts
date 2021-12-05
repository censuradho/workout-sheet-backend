import * as yup from 'yup'

export const createPerfilValidator = yup.object({
	avatar_url: yup.string(),
	user_id: yup.string().required(),
	username: yup.string()
})