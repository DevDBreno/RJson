import Joi from '@hapi/joi'

export const rulesSchema = Joi.object().keys({
  attendaceDay: Joi.object()
    .keys({
      day: Joi.alternatives()
        .try(
          Joi.array().items(Joi.string()),
          Joi.date(),
          Joi.string().equal('daily')
        )
        .required(),
      type: Joi.string(),
    })
    .when('day', {
      is: 'daily',
      then: Joi.object({
        type: Joi.valid('daily').default('daily'),
      }),
    }),

  intervals: Joi.array().items(
    Joi.object().keys({
      start: Joi.string().required(),
      end: Joi.string().required(),
    })
  ),
})

export const InitialFinalSchema = Joi.object().keys({
  idate: Joi.date().required(),
  fdate: Joi.date()
    .greater(Joi.ref('idate'))
    .required(),
})
