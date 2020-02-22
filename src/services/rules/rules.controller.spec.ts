import supertest, { SuperTest } from 'supertest'
import { createServer, Server } from 'http'
import { eachDayOfInterval } from 'date-fns'

import app from '../../app'

import jsonService from '../json/json.service'
import rulesService from './rules.service'

import { IFResponseSchema, IFQuery } from '../../helpers/helpers.rules'

describe('RulesController', () => {
	let server: Server, request: SuperTest<any>

	beforeAll(done => {
		server = createServer(app)
		server.listen(done)

		request = supertest(server)
	})

	afterAll(done => {
		server.close(done)
	})

	it('GET (/rules) - Find All Rules', async () => {
		const { rules: expectedPayload } = jsonService
		const { body: payloadToExpect } = await request.get('/rules')

		expect(payloadToExpect).toEqual(expectedPayload)
	})

	it('POST (/rules) - Add a New Rule Specific', async () => {
		const rule = {
			attendaceDay: '2020/02/24',
			intervals: [
				{
					start: '12:30',
					end: '13:30'
				}
			]
		}
		const {
			body: { data: expectedPayload }
		} = await request.post('/rules').send(rule)

		const payloadToExpect = rulesService.findRule(expectedPayload._id)

		expect(payloadToExpect).toEqual(expectedPayload)
	})
	it('POST (/rules) - Add a New Rule Weekly', async () => {
		const rule = {
			attendaceDay: ['monday', 'tuesday', 'wednesday'],
			intervals: [
				{
					start: '14:30',
					end: '15:30'
				}
			]
		}

		const {
			body: { data: expectedPayload }
		} = await request.post('/rules').send(rule)

		const payloadToExpect = rulesService.findRule(expectedPayload._id)

		expect(payloadToExpect).toEqual(expectedPayload)
	})
	it('POST (/rules) - Add a New Rule Daily', async () => {
		const rule = {
			attendaceDay: 'daily',
			intervals: [
				{
					start: '16:30',
					end: '17:30'
				}
			]
		}
		const {
			body: { data: expectedPayload }
		} = await request.post('/rules').send(rule)

		const payloadToExpect = rulesService.findRule(expectedPayload._id)

		expect(payloadToExpect).toEqual(expectedPayload)
	})

	it('GET (/rules) - Find Rules By Query', async () => {
		const IFParams = { idate: '2020/02/22', fdate: '2020/02/26' }

		const { body: payloadToExpect } = await request.get(`/rules?idate=${IFParams.idate}&fdate=${IFParams.fdate}`)

		const expectedPayload = eachDayOfInterval({ start: new Date(IFParams.idate), end: new Date(IFParams.fdate) })
			.map(IFResponseSchema)
			.map(IFQuery)

		expect(payloadToExpect).toEqual(expectedPayload)
	})
})
