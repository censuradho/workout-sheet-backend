import { AddressInfo } from 'net'

import app from 'app'

const PORT = process.env.PORT || 3333


const server = app.listen(PORT, () => {
  const { address, port } = server.address() as AddressInfo

	console.log(`Server running on ${address}:${port}`)
})