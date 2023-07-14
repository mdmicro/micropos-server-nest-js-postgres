import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import {СategoryProduct } from './categoryProduct.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CategoryProductService extends TypeOrmCrudService<СategoryProduct> {
	constructor(@InjectRepository(СategoryProduct) repo) {
		super(repo)
	}
}
