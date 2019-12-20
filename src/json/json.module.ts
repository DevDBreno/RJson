import { Module } from '@nestjs/common'
import { JsonService } from './json.service'

@Module({
  providers: [JsonService],
})
export class JsonModule {}
