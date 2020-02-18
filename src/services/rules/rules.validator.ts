import { Request, Response, NextFunction } from 'express'

import { Rule, InitialFinal } from './rules.interface'
import { InitialFinalSchema, rulesSchema } from './rules.helper'

export default class RulesValidator {
  public async ruleSchemaValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const rule: Rule = req.body

      await rulesSchema.validateAsync(rule)

      next()
    } catch (error) {
      res
        .status(400)
        .send({ status: res.statusCode, message: error['message'] })
    }
  }

  public IFDateValidator(query: InitialFinal): void {
    if (!query.idate && !query.fdate) {
    }
  }
}
