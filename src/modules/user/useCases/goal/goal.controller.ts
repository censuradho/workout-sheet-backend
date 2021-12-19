import { Request, Response } from 'express'

import { GoalService } from './goal.service'

export class GoalController {
	constructor(private readonly service: GoalService) {}

	async store (request: Request, response: Response) {
    
		await this.service.create(request.body)

		return response.sendStatus(201)
	}
}