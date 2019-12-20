import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JsonService {
  private dbPath: string = `db/database.json`
  constructor() {
    this.before()
  }
  async find(): Promise<object[]> {
    const result = JSON.parse(readFileSync(this.dbPath).toString())
    return result
  }
  async before() {
    if (!existsSync(this.dbPath)) {
      mkdirSync(`db`)
      writeFileSync(this.dbPath, '[]')
    }
  }
}
