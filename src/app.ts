import express from 'express'

import { applyMiddleware, applyRoutes } from './utils'

import middleware from './middlewares'
import routes from './services/routes'

const app = express()

applyMiddleware(middleware, app)
applyRoutes(routes, app)

export default app
