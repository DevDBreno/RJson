import RulesService from '../rules.service'

import { ICreateRule } from '../rules.interface'
import { IStoreIDs, IPayload } from '../../../helpers/helpers.interface'

describe('RulesService', () => {
  const storeIDs: IStoreIDs = {
    specificId: '',
    weeklyId: '',
    dailyId: ''
  }

  it('Should Create a Specific Rule', async () => {
    const { addRule } = RulesService

    const specificRule: ICreateRule = {
      attendaceDay: '2020/12/03',
      intervals: [{ start: '16:30', end: '17:30' }]
    }

    const {
      _id,
      ...payloadToExpect
    }: IPayload = await addRule(specificRule /* { isTest: true } */)

    const expectedPayload: IPayload = {
      statusCode: 201,
      message: 'new rule created'
    }

    storeIDs.specificId = _id

    expect(expectedPayload).toEqual({ ...payloadToExpect })
  })

  it('Should Find a Specific Rule', async () => {
    const { specificId } = storeIDs

    console.log(specificId)
  })
})
