import { Request, Response } from 'express'

import { GoalService } from './goal.service'

export class GoalController {
	constructor(private readonly service: GoalService) {}

	async store (request: Request, response: Response) {
    
		const result = await this.service.create(request.body)

		return response.status(201).json(result)
	}

	async index (request: Request, response: Response) {
		const result = await this.service.findMany()

		return response.json(result)
	}
	
	async delete (request: Request, response: Response) {
		const id = String(request.params.id)

		await this.service.delete(id)

		return response.sendStatus(203)
	}
}