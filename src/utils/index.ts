import { Router, Request, Response, NextFunction } from "express"

type Wrapper = (router: Router) => void

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void

type Route = {
  path: string
  method: string
  handler: Handler | Handler[]
}

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => middlewareWrappers.forEach(wrapper => wrapper(router))

export const applyRoutes = (routes: Route[], router: Router) =>
  routes.map(route => {
    const { method, path, handler } = route
    ;(router as any)[method](path, handler)
  })
