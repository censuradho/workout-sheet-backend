import * as yup from 'yup'

export const createTrainingSheetValidator = yup.object({
	fit_level: yup.string().required(),
	goal: yup.string().required(),
	height: yup.number().required(),
	weight: yup.number().required(),
	chronic_problem: yup.string(),
})