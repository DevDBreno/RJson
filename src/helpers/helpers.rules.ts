import uuid from 'uuid/v4'
import { format } from 'date-fns'
import { isDate, isArray } from 'util'

import { createRuleSchema } from './helpers.joi'

import { IRule } from '../services/rules/rules.interface'
import jsonService from '../services/json/json.service'

export const rulesConstructor = async (_rule: object) => {
	try {
		const rule: IRule = await createRuleSchema.validateAsync({ _id: uuid(), ..._rule })

		const { attendaceDay } = rule

		if (attendaceDay === 'daily') {
			rule.weekdays = 'all'
			rule.ruleType = 'daily'
		} else if (typeof attendaceDay === 'string' && isDate(new Date(attendaceDay))) {
			const weekday = new Date(attendaceDay).toLocaleString('en', { weekday: 'long' }).toLowerCase()

			rule.weekdays = weekday
			rule.ruleType = 'specific'
		} else if (isArray(attendaceDay)) {
			rule.weekdays = attendaceDay
			rule.ruleType = 'weekly'
		}

		return rule
	} catch ({ message }) {
		throw new Error(message)
	}
}

export const IFResponseSchema = (date: Date) => {
	return {
		attendaceDay: format(date, 'yyyy/MM/dd'),
		intervals: [],
		weekdays: date.toLocaleString('en', { weekday: 'long' }).toLowerCase()
	}
}

export const IFQuery = (eachRule: any) => {
	const { rules } = jsonService

	rules.forEach(r => {
		const { ruleType, attendaceDay, intervals, weekdays } = r

		// Daily Rules Logic:
		weekdays === 'all' ? intervals.forEach(interval => eachRule.intervals.push(interval)) : ''

		// Specific Rules Logic:
		ruleType === 'specific'
			? attendaceDay === eachRule.attendaceDay
				? intervals.forEach(interval => eachRule.intervals.push(interval))
				: ''
			: ''

		// Weekly Rules Logic:
		isArray(weekdays)
			? weekdays.forEach(wkday =>
					wkday === eachRule.weekdays ? intervals.forEach(interval => eachRule.intervals.push(interval)) : ''
			  )
			: ''
	})

	return eachRule
}
