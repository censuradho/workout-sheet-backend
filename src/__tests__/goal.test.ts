
import app from 'app'
import request from 'supertest'
import { Goal } from '@prisma/client'

import { CreateGoal } from 'modules/user/useCases/goal/goal.service'

import setTokenHeader from 'utils/setTokenHeader'
import { generateToken } from 'utils/_jwt'

describe('Goal module', () => {

	const goal = {} as Goal

	test('should be able to create new Goal', async () => {
		const token = generateToken({})

		const goalPayload: CreateGoal = {
			name: 'Teste 1'
		}
		const response = await request(app)
			.post('/goal')
			.send(goalPayload)
			.set('Authorization', setTokenHeader(token))

		Object.assign(goal, {
			...response.body
		})

		expect(response.status).toBe(201)
	})

	test('should be able to delete an Goal', async () => {
		const token = generateToken({})

		const response = await request(app)
			.delete(`/goal/${goal.id}`)
			.send(goal)
			.set('Authorization', setTokenHeader(token))
	})
})