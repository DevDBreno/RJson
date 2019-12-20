import { Module } from '@nestjs/common'
import { RulesController } from './rules.controller'
import { JsonService } from '../json/json.service'

@Module({
  controllers: [RulesController],
  providers: [JsonService],
})
export class RulesModule {}
