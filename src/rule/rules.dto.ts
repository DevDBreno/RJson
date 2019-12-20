export interface Interval {
  start: string
  end: string
}

export interface CreateRuleDto {
  attendanceDays: string[] | string
  intervals: Interval[]
}
