import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { СategoryProduct } from './categoryProduct.entity'
import { CategoryProductService } from './categoryProduct.service'


@Crud({
	model: {
		type: СategoryProduct
	}
})

@Controller('categoryProduct')
export class CategoryProductController implements CrudController <СategoryProduct> {
	constructor(public service: CategoryProductService) {}
}
