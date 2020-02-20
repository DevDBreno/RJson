import editJsonFile from "edit-json-file"

import { ServiceOptions } from "../../helpers/helpers.interface"
import { existsSync } from "fs"

export default class JsonService {
  filename: string

  constructor(options: ServiceOptions = {}) {
    this.filename = options.isTest ? `db.test.json` : `db.json`
    this.createJsonFile()
  }

  private async createJsonFile() {
    const jsonHandle = editJsonFile(`${__dirname}/${this.filename}`)

    if (!existsSync(`${__dirname}/${this.filename}`)) {
      jsonHandle.set("rules", [])
      jsonHandle.save()
    }
  }
}
