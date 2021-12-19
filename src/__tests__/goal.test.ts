
import app from 'app'
import request from 'supertest'

import { CreateGoal } from 'modules/user/useCases/goal/goal.service'

import setTokenHeader from 'utils/setTokenHeader'
import { generateToken } from 'utils/_jwt'

describe('Goal module', () => {

	const goal: CreateGoal = {
		name: 'Teste'
	}

	test('should be able to create new Goal', async () => {
		const token = generateToken({})

		const response = await request(app)
			.post('/goal')
			.send(goal)
			.set('Authorization', setTokenHeader(token))

		expect(response.status).toBe(201)
	})

	test('should be able to delete an Goal', async () => {
		const token = generateToken({})

		const response = await request(app)
			.post('/goal')
			.send(goal)
			.set('Authorization', setTokenHeader(token))
	})
})