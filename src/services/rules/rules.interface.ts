interface Interval {
  start: string
  end: string
}

export interface InitialFinal {
  idate?: string
  fdate?: string
}

export interface Rule {
  index: number
  id: string
  attendaceDay: { day: string | string[]; type: string }
  intervals: Interval[]
}
