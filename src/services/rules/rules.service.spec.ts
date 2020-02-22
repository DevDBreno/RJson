import RulesService from './rules.service'

describe('RulesService', () => {
	it('Should Create a Rule', async () => {
		const rule = {
			attendaceDay: '2020/12/03',
			intervals: [{ start: '16:30', end: '17:30' }]
		}

		const { data: expectedPayload } = await RulesService.addRule(rule)
		const payloadToExpect = RulesService.findRule(expectedPayload._id)

		expect(payloadToExpect).toEqual(expectedPayload)
	})
	it('Should Delete a Rule', async () => {
		const rule = {
			attendaceDay: ['monday', 'tuesday'],
			intervals: [{ start: '17:30', end: '18:30' }]
		}

		const {
			data: { _id }
		} = await RulesService.addRule(rule)

		const expectedPayload = { statusCode: 200, error: null, message: 'Rule Deleted Successfully', data: null }
		const payloadToExpect = RulesService.deleteRule(_id)

		expect(payloadToExpect).toEqual(expectedPayload)
	})
})
