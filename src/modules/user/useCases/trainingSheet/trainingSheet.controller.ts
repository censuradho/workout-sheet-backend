import { Request, Response } from 'express'

import { TrainingSheetService } from './trainingSheet.service'

export class TrainingSheetController {
	constructor(private readonly service: TrainingSheetService) {}

	async store (request: Request, response: Response) {
		const user_id = request.user_info.id

		const result = await this.service.create({
			...request.body,
			user_id
		})

		return response.status(201).json(result)
	}

	async show (request: Request, response: Response) {
		const user_id  = request.user_info.id

		const result = await this.service.findFirst(user_id)

		return response.json(result)
	}
}