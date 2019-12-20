import { Test, TestingModule } from '@nestjs/testing'
import { RulesController } from './rules.controller'
import { JsonService } from '../json/json.service'

describe('Rules Controller', () => {
  let controller: RulesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RulesController],
      providers: [JsonService],
    }).compile()

    controller = module.get<RulesController>(RulesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
