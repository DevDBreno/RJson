import { IRule } from "../services/rules/rules.interface"

export interface IPayload {
  statusCode: number
  message: string
  rule?: IRule
}

export interface IStoreIDs {
  specificId: string
  weeklyId: string
  dailyId: string
}

export interface ServiceOptions {
  isTest?: boolean
}
