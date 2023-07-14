import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryProductService } from './categoryProduct.service'
import { CategoryProductController } from './categoryProduct.controller'
import { СategoryProduct } from './categoryProduct.entity'

@Module({
	imports: [TypeOrmModule.forFeature([СategoryProduct])],
	controllers: [CategoryProductController],
	providers: [CategoryProductService]
})
export class CategoryProductModule {}
