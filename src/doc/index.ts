import swagger, { SwaggerOptions } from 'swagger-ui-express'
import file from './fileDoc.json'


// DOC: https://swagger.io/docs/specification/basic-structure/

const options: SwaggerOptions = {}

function setupSwagger () {
	return {
		setup: swagger.setup(file, options),
		server: swagger.serve
	}
}


export default setupSwagger 