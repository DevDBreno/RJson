import http from "http"
import express from "express"

import { applyMiddleware, applyRoutes } from "./utils"

import middleware from "./middlewares"
import routes from "./services"

process.on("uncaughtException", e => {
  console.log(e)
  process.exit(1)
})
process.on("unhandledRejection", e => {
  console.log(e)
  process.exit(1)
})

const router = express()

applyMiddleware(middleware, router)
applyRoutes(routes, router)

const { PORT = 3000 } = process.env
const server = http.createServer(router)

server.listen(PORT, () =>
  console.log(`:: Server running at: http://localhost:${PORT} ::`)
)
