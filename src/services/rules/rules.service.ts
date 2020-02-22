import JsonService from '../json/json.service'
import { rulesConstructor } from '../../helpers/helpers.rules'

import { IPayload } from '../../helpers/helpers.interface'

class RulesService {
	public async addRule(_rule: object): Promise<IPayload> {
		try {
			const rule = await rulesConstructor(_rule)

			// Sync save
			JsonService.save(rule)

			// Successfully payload
			return { statusCode: 201, error: null, message: 'New Rule Successfully Created', data: rule }
		} catch ({ message }) {
			// Unccessfully payload
			return { statusCode: 400, error: 'Bad Request', message, data: null }
		}
	}
	public findRule(id: string) {
		return JsonService.rules.find(({ _id }) => _id === id)
	}
	public deleteRule(id: string): IPayload {
		const rules = JsonService.rules.filter(({ _id }) => _id !== id)

		if (!this.findRule(id)) {
			return { statusCode: 400, error: 'Bad Request', message: 'Rule Not Found', data: null }
		}

		JsonService.save(rules)

		return { statusCode: 200, error: null, message: 'Rule Deleted Successfully', data: null }
	}
}

export default new RulesService()
