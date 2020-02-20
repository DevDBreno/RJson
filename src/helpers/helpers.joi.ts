import JoiBase from '@hapi/joi'
import JoiDate from '@hapi/joi-date'

const Joi = JoiBase.extend(JoiDate)

export const rulesSchema = Joi.object({
  attendaceDay: Joi.alternatives()
    .try(
      Joi.array()
        .items(Joi.string())
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
