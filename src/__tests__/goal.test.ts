
import app from 'app'

import request from 'supertest'

describe('Goal module', () => {

	const goal = {

	}
	test('should be able to create new Goal', async () => {
		const response = await request(app)
			.post('/goal')
			.send()
	})
})