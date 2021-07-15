import { Company } from './company.entity'
import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CompaniesService extends TypeOrmCrudService<Company> {
	constructor(@InjectRepository(Company) repo) {
		super(repo)
	}
}
