import { Request, Response /* NextFunction */ } from "express"

import RulesService from "./rules.service"

class RulesController {
  public async addRule(req: Request, res: Response) {
    try {
      const { addRule } = RulesService

      const { statusCode, message } = await addRule(req.body)

      res.status(statusCode).send({
        statusCode,
        message
      })
    } catch ({ message }) {
      res.status(500).send({
        statusCode: res.statusCode,
        error: "Internal Server Error",
        message
      })
    }
  }
}

export default new RulesController()
