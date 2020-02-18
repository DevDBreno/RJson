import { Request, Response } from 'express'

import { Rule } from './rules.interface'

export default class RulesController {
  public async addRule(req: Request, res: Response) {
    const rule: Rule = req.body

    res.status(201).send({
      status: res.statusCode,
      message: `New rule added!`,
    })
  }
}
