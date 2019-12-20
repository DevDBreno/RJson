import { Controller, Get } from '@nestjs/common'
import { JsonService } from '../json/json.service'

@Controller('rules')
export class RulesController {
  constructor(private readonly jsonService: JsonService) {}

  @Get()
  async findAll(): Promise<object[]> {
    return await this.jsonService.find()
  }
}
