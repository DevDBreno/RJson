export interface IPayload {
  statusCode: number
  message: string
  _id?: string
}

export interface IStoreIDs {
  specificId?: string
  weeklyId?: string
  dailyId?: string
}

export interface ServiceOptions {
  isTest?: boolean
}
