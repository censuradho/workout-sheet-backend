import { Request, Response } from 'express'

import { FitLevelService } from './fitLevel.service'

export class FitLevelController {
	constructor(private readonly service: FitLevelService) {}

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