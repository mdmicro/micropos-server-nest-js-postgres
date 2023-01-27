import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Cashregister } from './cashregister.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CashregisterService extends TypeOrmCrudService<Cashregister> {
	constructor(@InjectRepository(Cashregister) repo) {
		super(repo)
	}
}
