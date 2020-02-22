import { IRule } from '../services/rules/rules.interface'

export interface IPayload {
	statusCode: number
	error: string | null
	message: string
	data?: IRule
}

export interface ServiceOptions {
	isTest?: boolean
}
