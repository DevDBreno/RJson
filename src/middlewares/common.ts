import { Router, json, urlencoded } from 'express'
import cors from 'cors'
import compression from 'compression'

export const handleCors = (router: Router) => router.use(cors({ credentials: true, origin: true }))

export const handleBodyRequestParsing = (router: Router) => {
  router.use(urlencoded({ extended: true }))
  router.use(json())
}

export const handleCompression = (router: Router) => router.use(compression())
