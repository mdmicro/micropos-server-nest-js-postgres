import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { config } from './orm.config'
import { CompaniesModule } from './companies/companies.module'
import { CashregisterModule } from './cashregister/cashregister.module'
import { ProductModule } from './product/product.module'
import { TerminalModule } from './terminal/terminal.module'

@Module({
	imports: [TypeOrmModule.forRoot(config), CompaniesModule, CashregisterModule, ProductModule, TerminalModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
