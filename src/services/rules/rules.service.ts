// import format from "date-fns/format";
import uuid from 'uuid/v4'

// import { isDate, isString } from "util";

import { ICreateRule, IRule } from './rules.interface'

import { rulesSchema } from '../../helpers/helpers.joi'
import { IPayload /* ServiceOptions */ } from '../../helpers/helpers.interface'
// import JsonService from "../json/json.service"

class RulesService {
  public async addRule (
    _rule: ICreateRule
    // options: ServiceOptions = {}
  ): Promise<IPayload> {
    try {
      // const jsonService = new JsonService(options)
      const rule: IRule = await rulesSchema.validateAsync(_rule)

      // const { attendaceDay } = _rule

      // if (isDate(new Date(attendaceDay))) {
      //   console.log(``)
      // } else if (isString(attendaceDay)) {
      //   console.log(``)
      // } else {
      //   console.log(``)
      // }

      rule._id = uuid()

      const { _id } = rule

      const response: IPayload = {
        statusCode: 201,
        message: 'new rule created',
        _id
      }

      return { _id, ...response }
    } catch ({ message }) {
      const response: IPayload = {
        statusCode: 400,
        message
      }

      return response
    }
  }
}

export default new RulesService()
