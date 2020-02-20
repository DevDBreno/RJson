import RulesService from '../rules.service'

import { ICreateRule } from '../rules.interface'
import { IStoreIDs } from '../../../helpers/helpers.interface'

describe('RulesService', () => {
  const storeIDs: IStoreIDs = {
    specificId: '',
    weeklyId: '',
    dailyId: '',
  }

  it('Should Create a Specific Rule', async () => {
    const { addRule } = RulesService

    const specificRule: ICreateRule = {
      attendaceDay: '2020/12/03',
      intervals: [{ start: '16:30', end: '17:30' }],
    }

    const {
      rule: { _id, ...dataToTest },
      ...responseToTest
    } = await addRule(specificRule, { isTest: true })

    const expectPayload = {
      statusCode: 201,
      message: 'new rule created',
      rule: specificRule,
    }

    const payloadTest = {
      ...responseToTest,
      rule: { ...dataToTest },
    }

    storeIDs['specificId'] = _id

    expect(expectPayload).toEqual(payloadTest)
  })

  it('Should Find a Specific Rule', async () => {
    const { specificId } = storeIDs

    console.log(specificId)
  })
})
