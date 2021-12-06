import { AddressInfo } from 'net'

import app from 'app'

import logger from 'utils/logger'

const PORT = process.env.PORT || 3333

const server = app.listen(PORT, () => {
	const { address, port } = server.address() as AddressInfo

	logger.info(`Server running on ${address}:${port}`)
})