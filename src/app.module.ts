import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { config } from './orm.config'
import { CompaniesModule } from './companies/companies.module'
// import { CashregisterController } from './cashregister/cashregister.controller'
// import { CashregisterService } from './cashregister/cashregister.service'
import { CashregisterModule } from './cashregister/cashregister.module'
import { ProductModule } from './product/product.module'

@Module({
	imports: [TypeOrmModule.forRoot(config), CompaniesModule, CashregisterModule, ProductModule],
	// controllers: [AppController, CashregisterController],
	controllers: [AppController],
	// providers: [AppService, CashregisterService],
	providers: [AppService],
})
export class AppModule {}
