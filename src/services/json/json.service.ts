import { existsSync, writeFileSync, readFileSync, mkdirSync } from 'fs'

import { IRule } from '../rules/rules.interface'
import { isArray } from 'util'

class JsonService {
	file: string
	fileDir: string
	fullPath: string

	constructor() {
		this.file = process.env.NODE_ENV === 'test' ? 'db.test.json' : 'db.json'
		this.fileDir = `${__dirname}/database/`
		this.fullPath = `${this.fileDir}${this.file}`
	}

	private createDatabase() {
		if (!existsSync(this.fileDir)) {
			mkdirSync(this.fileDir)
			writeFileSync(this.fullPath, '[]')
		} else if (!existsSync(this.fullPath)) {
			writeFileSync(this.fullPath, '[]')
		}
	}

	public get rules() {
		this.createDatabase()

		const rules: IRule[] = JSON.parse(readFileSync(this.fullPath).toString())
		return rules
	}

	public save(data: IRule | IRule[]) {
		let rules: IRule[] = this.rules

		if (isArray(data)) {
			rules = data
		} else {
			rules.push(data)
		}

		writeFileSync(this.fullPath, JSON.stringify(rules))
	}
}

export default new JsonService()
