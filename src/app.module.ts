import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { JsonModule } from './json/json.module'
import { RulesModule } from './rule/rules.module'

@Module({
  imports: [JsonModule, RulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
