import { Request, Response } from 'express'

import RulesController from './rules.controller'
import RulesValidator from './rules.validator'

const rulesController = new RulesController()
const rulesValidator = new RulesValidator()

export default [
  {
    path: '/rules',
    method: 'post',
    handler: [rulesValidator.ruleSchemaValidator, rulesController.addRule],
  },
]
