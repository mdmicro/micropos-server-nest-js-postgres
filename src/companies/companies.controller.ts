import { CompaniesService } from './companies.service'
import { CrudController, Crud } from '@nestjsx/crud'
import { Company } from './company.entity'
import { Controller } from '@nestjs/common'

@Crud({
	model: {
		type: Company
	}
})

@Controller('companies')
export class CompaniesController implements CrudController <Company> {
	constructor(public service: CompaniesService) {}
}

