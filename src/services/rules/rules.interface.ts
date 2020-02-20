type Interval = {
  start: string
  end: string
}

// export interface InitialFinal {
//   idate?: string
//   fdate?: string
// }

export interface IRule {
  _id: string
  attendaceDay: string | string[]
  intervals: Interval[]
}

export interface ICreateRule {
  attendaceDay: string | string[]
  intervals: Interval[]
}
