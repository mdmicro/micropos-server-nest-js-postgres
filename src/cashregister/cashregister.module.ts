import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CashregisterService } from './cashregister.service'
import { CashregisterController } from './cashregister.controller'
import { Cashregister } from './cashregister.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Cashregister])],
	controllers: [CashregisterController],
	providers: [CashregisterService]
})
export class CashregisterModule {}
