import { Request, Response } from 'express'
import { eachDayOfInterval } from 'date-fns'

import RulesService from './rules.service'
import jsonService from '../json/json.service'

import { IFResponseSchema, IFQuery } from '../../helpers/helpers.rules'
import { IFQuerySchema } from '../../helpers/helpers.joi'

class RulesController {
	public async addRule(req: Request, res: Response) {
		try {
			const { statusCode, error, message, data } = await RulesService.addRule(req.body)

			res.status(statusCode).send({
				statusCode,
				error,
				message,
				data
			})
		} catch ({ message }) {
			res.status(500).send({
				statusCode: res.statusCode,
				error: 'Internal Server Error',
				message
			})
		}
	}
	public async findAll(req: Request, res: Response) {
		try {
			if (req.query.idate && req.query.fdate) {
				const { idate, fdate } = await IFQuerySchema.validateAsync(req.query)

				const rules = eachDayOfInterval({ start: idate, end: fdate })
					.map(IFResponseSchema)
					.map(IFQuery)

				res.status(200).send(rules)
			} else res.status(200).send(jsonService.rules)
		} catch ({ message }) {
			res.status(400).send({
				statusCode: res.statusCode,
				error: 'Bad Request',
				message,
				data: null
			})
		}
	}

	public deleteRule(req: Request, res: Response) {
		const { statusCode, error, message, data } = RulesService.deleteRule(req.params.id)
		res.status(statusCode).send({
			statusCode,
			error,
			message,
			data
		})
	}
}

export default new RulesController()
