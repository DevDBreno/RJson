import RulesController from './rules.controller'

const { addRule, findAll, deleteRule } = RulesController

export default [
	{
		path: '/rules',
		method: 'post',
		handler: [addRule]
	},
	{
		path: '/rules',
		method: 'get',
		handler: [findAll]
	},
	{
		path: '/rules/:id',
		method: 'delete',
		handler: [deleteRule]
	}
]
