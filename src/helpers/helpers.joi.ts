import JoiBase from '@hapi/joi'
import JoiDate from '@hapi/joi-date'

const Joi = JoiBase.extend(JoiDate)

export const createRuleSchema = Joi.object({
	_id: Joi.string(),
	attendaceDay: Joi.alternatives()
		.try(
			Joi.array()
				.items(Joi.string().valid('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'))
				.min(1),
			Joi.string().equal('daily'),
			Joi.date()
				.format('YYYY/MM/DD')
				.raw()
		)
		.required(),
	intervals: Joi.array()
		.items(
			Joi.object({
				start: Joi.date()
					.format('HH:mm')
					.raw()
					.required(),
				end: Joi.date()
					.format('HH:mm')
					.raw()
					.required()
			})
		)
		.required()
})

export const IFQuerySchema = Joi.object({
	idate: Joi.date().format('YYYY/MM/DD'),
	fdate: Joi.date()
		.greater(Joi.ref('idate'))
		.format('YYYY/MM/DD')
})
